
const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};


console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(20)); // 6765
//console.log(fib(50)); // 12586269025