
// Memoization
// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// In this example, we will use memoization to optimize the Fibonacci function.


const fib = (n, memo={}) => {
    if (n in memo) return memo[n];  
    if (n <= 2) return 1;

    memo[n] =  fib(n - 1,memo) + fib(n - 2,memo)
    
    return memo[n];
};


console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(20)); // 6765
console.log(fib(50)); // 6765