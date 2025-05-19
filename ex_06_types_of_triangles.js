//Write a program that asks the user for the lengths of the three sides of a triangle and then determines if the triangle is equilateral, isosceles, or scalene.
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
console.log(showProgramName(__filename));
let sideA = Number(prompt("Please type the length of side A: "));
let sideB = Number(prompt("Please type the length of side B: "));
let sideC = Number(prompt("Please type the length of side C: "));

if (
  (sideA === sideB && sideA !== sideC) ||
  (sideA === sideC && sideA !== sideB) ||
  (sideB === sideC && sideB !== sideA)
) {
  console.log("The triangle is isosceles");
} else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
  console.log("The triangle is scalene");
} else if (sideA === sideB && sideA === sideC && sideB === sideC) {
  console.log("The triangle is equilateral");
}
