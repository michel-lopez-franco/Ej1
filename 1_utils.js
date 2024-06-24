letras = {
  a: 1,
  b: 2,
};

console.log(letras["a"]); // 1
console.log(letras["b"]); // 2

console.log(letras.a); // 1
console.log(letras.b); // 2

letras.c = 3;
console.log(letras); // { a: 1, b: 2, c: 3 }

letras["d"] = 4;
console.log(letras); // { a: 1, b: 2, c: 3, d: 4 }

console.log(letras["e"]); // undefined

console.log(letras["e"] || 5); // 5

console.log((letras["e"] = letras["e"] || 5)); // 5
console.log(letras); // { a: 1, b: 2, c: 3, d: 4, e: 5 }
