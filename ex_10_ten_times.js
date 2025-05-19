//This program will ask the user to input a number and then print that number 10 times.
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
console.log(showProgramName(__filename));
let userInput = Math.abs(
  Number(prompt("Please type a number to be repeated 10 times: "))
);
for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log(i + " time: " + userInput);
  } else {
    console.log(i + " times: " + userInput);
  }
}
