
// Memoization
// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// In this example, we will use memoization to optimize the Fibonacci function.


const fib = (n) => {
    var i = n-2;
    var resto = 1;
    var anterior = 1;
    var tmp = 0;
    while (true) {
        tmp = resto 
        resto = anterior + resto 
        anterior = tmp
        i = i -1
        if (i === 0) {
            break;
        }
    }

    return resto;
};


console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(20)); // 6765
console.log(fib(50)); // 