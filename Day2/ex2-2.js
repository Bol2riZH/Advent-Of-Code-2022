'use strict';

const fs = require('fs');
const path = require('path');

const f = fs.readFileSync(path.join(__dirname, 'input/2.txt')).toString();

/*
 A = X = rock = 1
 B = Y = paper = 2
 C = Z = scissor = 3

 win = 6
 loose = 0
 draw = 3
*/

const transformInput = (inputFile) => {
  return inputFile.split('\r\n');
};

const gamesInputs = transformInput(f);

console.log(gamesInputs);

const playedGame = (inputs) => {
  let total = 0;

  inputs.map((input) => {
    const elfGame = input.charAt(input);
    const myGame = input.slice(-1);
    // loose
    if (myGame === 'X') {
      if (elfGame === 'A') return (total = total + 3);
      if (elfGame === 'B') return (total = total + 1);
      if (elfGame === 'C') return (total = total + 2);
    }
    // draw
    if (myGame === 'Y') {
      if (elfGame === 'A') return (total = total + 4);
      if (elfGame === 'B') return (total = total + 5);
      if (elfGame === 'C') return (total = total + 6);
    }
    // win
    if (myGame === 'Z') {
      if (elfGame === 'A') return (total = total + 8);
      if (elfGame === 'B') return (total = total + 9);
      if (elfGame === 'C') return (total = total + 7);
    }
  });
  return total;
};
const result = playedGame(gamesInputs);
console.log(result);
