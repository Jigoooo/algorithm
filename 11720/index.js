const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const textArray = input[1].split('').map(Number);
console.log(textArray.reduce((acc, cur) => acc + cur, 0));