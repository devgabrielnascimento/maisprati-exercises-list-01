// The code will print the result of the operation chosen by the user
// for the numbers from 1 to 10.
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
let userInput = 0;
let result = 0;
let i;
let option = "";
console.log(showProgramName(__filename));
let choiceOperation = Number(
  prompt(
    "Please choose an operation: 1 for multiplication, 2 for addition, 3 for subtraction, 4 for division: "
  )
);
userInput = Number(prompt("Please type a number: "));
for (i = 1; i <= 10; i++) {
  switch (choiceOperation) {
    case 1:
      result = userInput * i;
      option = " x ";
      break;
    case 2:
      result = userInput + i;
      option = " + ";
      break;
    case 3:
      result = userInput - i;
      option = " - ";
      break;
    case 4:
      result = userInput / i;
      option = " / ";
      if (i === 0) {
        console.log("Division by zero is not allowed");
        continue;
      }
      break;
    default:
      console.log("Invalid choice");
      break;
  }

  if (option === " / ") {
    console.log(userInput + option + i + " = " + result.toFixed(2));
    continue;
  } else {
    console.log(userInput + option + i + " = " + result);
  }
}
