// Write a program that asks the user for the quantity of apples they want to buy.
// If the quantity is 12 or more, the price per apple is $0.25, otherwise it is $0.30.
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
console.log(showProgramName(__filename));
let appleQuantity = Number(
  prompt("Please type the quantity of apples you want to buy: ")
);
let applePrice;
let totalPrice;

if (appleQuantity >= 12) {
  applePrice = 0.25;
} else {
  applePrice = 0.3;
}

totalPrice = appleQuantity * applePrice;
console.log("The total price is: R$" + totalPrice.toFixed(2));
