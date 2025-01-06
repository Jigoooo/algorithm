const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = '';

for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);

    if (i === input.length - 1) {
        result += a + b;
        continue;
    }

    result += a + b + '\n';
}

console.log(result);