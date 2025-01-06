const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
const count = input[0];

let result = Array.from({ length: count }, (_, i) => {
    const spaces = ' '.repeat(count - i - 1);
    const start = '*'.repeat(i + 1);
ㅅ
    return spaces + start;
}).join('\n');

console.log(result);