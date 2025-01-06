const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const array = input[1].split(' ').map(Number);

const min = Math.min(...array);
const max = Math.max(...array);

console.log(`${min} ${max}`);