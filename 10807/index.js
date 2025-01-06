const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const array = input[1].split(' ').map(Number);
const findNumber = Number(input[2]);

console.log(array.filter(number => number === findNumber).length);