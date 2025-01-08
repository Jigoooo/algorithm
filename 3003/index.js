const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split(' ');
const chessUnits = [1, 1, 2, 2, 2, 8];
const result = [];

for (let i = 0; i < chessUnits.length; i++) {
    result.push(chessUnits[i] - input[i]);
}

console.log(result.join(' '));