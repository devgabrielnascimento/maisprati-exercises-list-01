//Type five numbers and print their sum
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
let userInput = 0;
let result = 0;
console.log(showProgramName(__filename));
for (let i = 0; i < 5; i++) {
  userInput = Number(prompt("Please type a number: "));
  result += userInput;
}

console.log(result);
