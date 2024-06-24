
const howSum = (targetSum, numbers,memo={}) => {
if (targetSum in memo) return memo[targetSum];
if (targetSum === 0) return [];
if (targetSum < 0) return null;

for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers,memo);

    if (remainderResult !== null) {
        memo[targetSum] = [...remainderResult,num];
        return memo[targetSum];
    }
    
    
}

memo[targetSum] = null;
return null;
};

// m = target sum
// n = numbers.length   
// Memoized 
// time: O(n * m *m)
// space: O(m*m)


console.log(howSum(7, [2, 3])); // true
console.log(howSum(7, [5, 3, 4, 7])); // true
console.log(howSum(7, [2, 4])); // false
console.log(howSum(8, [2, 3, 5])); // true
console.log(howSum(7, [2, 1])); // true

console.log(howSum(300, [7, 14])); // false
console.log(howSum(301, [7, 14])); // false
//console.log(howSum(35, [7, 14])); // true
//console.log(howSum(35, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])); // true