//Calculate the factorial of a number
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
console.log(showProgramName(__filename));
let factorialInput = Number(prompt("Please enter a number: "));

function factorialIteration(number) {
  const multipliers = [];
  let result = 1;
  for (let i = number; i > 0; i--) {
    multipliers.push(i);
    result *= i;
  }

  return number > 1
    ? `${number}! = ${multipliers.join(" x ")} = ${result}`
    : `${number}! = ${result}`;
}
console.log(factorialIteration(Math.abs(factorialInput)));
