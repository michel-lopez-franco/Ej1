
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers, memo);

        if (remainderResult !== null) {
            const combination = [...remainderResult, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }

    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

// m = target sum
// n = numbers.length
// memoized
// time: O(n*m * m)
// space: O(m^2)

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3,5]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25,25,25,25]

// console.log(bestSum(7, [5, 3, 4, 7])); // [7]