const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const count = Number(input[0]);
let result = '';

for (let i = 1; i <= count; i++) {
    const [a, b] = input[i].split(' ').map(Number);

    if (i === count) {
        result += a + b;
        continue;
    }

    result += a + b + '\n';
}

console.log(result);
