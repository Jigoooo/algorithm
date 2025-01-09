const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim();
const count = Number(input);
const totalCount = Number(input) * 2 - 1;
const result = [];

for (let i = 1; i <= totalCount; i++) {
    if (i <= count) {
        result.push(' '.repeat(totalCount - i - count + 1) + '*'.repeat(i) + '*'.repeat(i - 1));
    } else {
        result.push(' '.repeat(i - count) + '*'.repeat(totalCount - i + 1) + '*'.repeat(totalCount - i));
    }
}

console.log(result.join('\n'));