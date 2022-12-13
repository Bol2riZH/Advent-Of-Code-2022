"use strict";

const fs = require("fs");
const path = require("path");

const readInput = (filename) => {
  return fs.readFileSync(path.join(__dirname, `input/${filename}`)).toString();
};

export default readInput;
