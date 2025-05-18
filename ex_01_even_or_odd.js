//Write a program to check if a number is even or odd
const prompt = require("prompt-sync")();

let userInput = Number(prompt("Please type a number: "));

if (isNaN(userInput)) {
  console.log("Please type a valid number");
} else if (userInput % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}
