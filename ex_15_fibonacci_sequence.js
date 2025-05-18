// Fibonacci sequence using a for loop

let n1 = 0;
let n2 = 1;
let n3;
const n = 10;

const fibonacci = [];

for (let i = 0; i < n; i++) {
  fibonacci[i] = n1;
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
console.log(fibonacci);