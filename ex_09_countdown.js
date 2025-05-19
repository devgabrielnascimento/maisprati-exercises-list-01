//A simple countdown from 10 to 1
const { showProgramName } = require("./showProgramName");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
const countdown = [];
let n = 0;
console.log(showProgramName(__filename));
console.log("Countdown from 10 to 0 with an array");
for (let i = 10; i >= 1; i--) {
  countdown[n++] = i;
}
console.log(countdown);
