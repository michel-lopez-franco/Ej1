
// Memoization
// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// In this example, we will use memoization to optimize the Fibonacci function.

mem = {

}

const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    mem[n-1] = mem[n-1] || fib(n - 1)
    mem[n-2] = mem[n-2] || fib(n - 2)
    
    return mem[n - 1] + mem[n - 2];
};


console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(20)); // 6765
console.log(fib(50)); // 6765