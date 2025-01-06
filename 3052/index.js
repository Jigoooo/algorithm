const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const remainArray = input.map((number) => number % 42);

const set = new Set(remainArray);

console.log(Array.from(set).length);