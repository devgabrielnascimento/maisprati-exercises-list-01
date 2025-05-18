//Type five numbers and print their sum
const prompt = require("prompt-sync")();

let userInput = 0;
let result = 0;
for(let i = 0; i < 5; i++) {
  userInput = Number(prompt("Please type a number: "));
  result += userInput;
}

console.log(result);