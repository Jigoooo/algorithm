const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split(' ');
const a = Number(input[0].split('').reverse().join(''));
const b = Number(input[1].split('').reverse().join(''));

console.log(Math.max(a, b));