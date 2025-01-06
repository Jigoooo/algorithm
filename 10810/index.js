const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const result = Array.from({ length: a }).map(() => 0);

for(let i = 1; i <= b; i++) {
    const [start, end, replace] = input[i].split(' ').map(Number);
    const count = end - start + 1;
    const replacements = Array(count).fill(replace);

    result.splice(start - 1, count, ...replacements);
}

console.log(result.join(' '));