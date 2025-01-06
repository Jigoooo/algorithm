const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const standardNumber = input[0].split(' ').map(Number)[1];
const array = input[1].split(' ').map(Number);

console.log(array.filter(number => number < standardNumber).join(' '));