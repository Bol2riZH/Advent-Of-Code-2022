"use strict";
const fs = require("fs");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "input/1.txt")).toString();

const compute1 = (input) => {
  const elves = input.split("\r\n\r\n");
  const caloriesByElves = elves.map((elf) => {
    const calories = elf.split("\n");
    return calories.reduce((a, c) => {
      return Number(a) + Number(c);
    }, 0);
  });
  caloriesByElves.sort((a, b) => a - b);
  const highestElfCalories = caloriesByElves.slice(-1);
  console.log(highestElfCalories);
};
compute1(f);
