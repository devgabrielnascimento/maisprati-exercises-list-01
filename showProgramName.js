const path = require("path");
function showProgramName(__filename) {
  const fileName = path.basename(__filename, path.extname(__filename));

  return "Welcome to the program: " + fileName + "!";
}

module.exports = {
  showProgramName,
};
