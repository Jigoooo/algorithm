const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const max = Math.max(...input);
const index = input.indexOf(max);

console.log(max + '\n' + (index + 1));