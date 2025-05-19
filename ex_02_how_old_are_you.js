//Write a program that asks the user for their age and prints out whether they are a child, an adult, or a senior citizen.
// The age ranges are as follows:
// - Child: 0-11 years
// - Adult: 12-64 years
// - Senior: 65 years and older
const prompt = require("prompt-sync")();
const { showProgramName } = require("./showProgramName");
const max_age_children = 11;
const max_age_teenagers = 17;
const max_age_adults = 64;
const min_age_seniors = 65;
console.log(showProgramName(__filename));
let age = Number(prompt("Please type your age: "));

if (age <= max_age_children) {
  console.log("This person is a child");
} else if (age > max_age_children && age <= max_age_teenagers) {
  console.log("This person is a teenager");
} else if (age > max_age_teenagers && age <= max_age_adults) {
  console.log("This person is an adult");
} else if (age >= min_age_seniors) {
  console.log("This person is a senior");
}
