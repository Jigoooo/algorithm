const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim();
const reverseInput = input.split('').reverse().join('');

console.log(input === reverseInput ? 1 : 0);