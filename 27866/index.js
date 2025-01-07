const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const targetString = input[0];
const targetIndex = Number(input[1]);

console.log(targetString.charAt(targetIndex - 1));