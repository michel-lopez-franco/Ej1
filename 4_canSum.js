
const canSum = (targetSum, numbers) => {
if (targetSum === 0) return true;
if (targetSum < 0) return false;

for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
        return true;    
    }
}
return false;
};


console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(7, [2, 1])); // true

//console.log(canSum(300, [7, 14])); // false
console.log(canSum(35, [7, 14])); // true


console.log(canSum(35, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])); // true