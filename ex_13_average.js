// This program calculates the average of a series of numbers entered by the user.
// The program continues to ask for numbers until the user enters 0.
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
let userInput = 0;
let result = 0;
let i = 0;
console.log(showProgramName(__filename));
do {
  userInput = Number(prompt("Please type a number: "));
  if (userInput !== 0) {
    result += userInput;
    i++;
  }
} while (userInput !== 0);

const average = result / i;

if (average > 0 || average < 10) {
  console.log("The average is: " + average.toFixed(2) + "\nProgram finished");
} else {
  console.log("Average is not valid");
}
