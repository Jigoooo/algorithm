const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
const a = input[0];
const totalLength = a / 4;
let result = '';

for (let i = 0; i < totalLength; i++) {
    if (i === totalLength - 1) {
        result += 'long int';
        continue;
    }
    result += 'long ';
}

console.log(result);
