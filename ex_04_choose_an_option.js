//Write a interactive menu that asks the user to choose an option from three options and prints out the corresponding message.
const prompt = require("prompt-sync")();
const ESC = "\x1b[";
const RESET = `${ESC}0m`;
let color;
let myAnsi = `1;3;${color}m`;
let userInput = prompt(
  "Please type a number between 1 and 3 and press enter to see a inspiration quote: "
);

switch (userInput) {
  case "1":
    console.log("You have chosen option 1: ");
    myAnsi = `1;3;${color = 33}m`;
    console.log(
      `${ESC}${myAnsi}Either you run the day, or the day runs you.${RESET}`
    );
    console.log("Jim Rohn");
    break;
  case "2":
    console.log("You have chosen option 2: ");
    myAnsi = `1;3;${color = 32}m`;
    console.log(
      `${ESC}${myAnsi}The only way to do great work is to love what you do.${RESET}`
    );
    console.log("Steve Jobs");
    break;
  case "3":
    console.log("You have chosen option 3: ");
    myAnsi = `1;3;${color = 31}m`;
    console.log(
      `${ESC}${myAnsi}Success is not the key to happiness. Happiness is the key to success.${RESET}`
    );
    console.log("Albert Schweitzer");
    break;
  default:
    console.log("Invalid option");
}
