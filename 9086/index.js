const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const count = Number(input[0]);
let result = '';

for (let i = 1; i <= count; i++) {
    const text = input[i];

    if (i === count) {
        result += text.charAt(0) + text.charAt(text.length - 1);
        continue;
    }

    result += text.charAt(0) + text.charAt(text.length - 1) + '\n';
}

console.log(result);