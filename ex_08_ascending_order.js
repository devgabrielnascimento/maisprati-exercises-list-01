//Type two numbers and print them in ascending order
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
let num1;

let num2;
console.log(showProgramName(__filename));
while (num1 === num2) {
  num1 = Number(prompt("Please type the first number: "));
  num2 = Number(prompt("Please type the second number: "));
  if (num1 === num2) {
    console.log("The numbers are equal. Please type different numbers.");
  } else if (num1 > num2) {
    console.log("The first number is greater than the second number.");
    console.log("The numbers in ascending order are: " + num2 + ", " + num1);
  } else if (num1 < num2) {
    console.log("The second number is greater than the first number.");
    console.log("The numbers in ascending order are: " + num1 + ", " + num2);
  } else {
    console.log("Something went wrong.");
  }
}
