//Calculate the IMC of a person
// The IMC (Body Mass Index) is calculated using the formula: weight / (height * height)
const prommpt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
console.log(showProgramName(__filename));
let weight = Number(prommpt("Please type your weight in kg: "));
let height = Number(prommpt("Please type your height in meters: "));
let imc = weight / (height * height);

if(imc < 18.5) {
    console.log("You are underweight");
} else if(imc >= 18.5 && imc <= 24.9) {
    console.log("You are at a normal weight");
} else if(imc >= 25 && imc <= 29.9) {
    console.log("You are overweight");
} else if(imc >= 30 && imc <= 34.9) {
    console.log("You are obese (class 1)");
}
else if(imc >= 35 && imc <= 39.9) {
    console.log("You are obese (class 2)");
} else {
    console.log("You are morbidly obese (class 3)");
}
