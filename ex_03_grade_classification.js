// This program checks the grade of a student and prints the result based on the grade.
const prompt = require("prompt-sync")();
let gradeInput = prompt("Please enter a grade: ");
if (gradeInput >= 6 && gradeInput <= 10) {
  console.log("Passed");
} else if (gradeInput == 5) {
  console.log("Retake");
} else if (gradeInput <= 4) {
  console.log("Failed");
} else {
  console.log("Wrong grade");
}