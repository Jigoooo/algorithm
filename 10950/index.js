const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './10950/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const totalLength = Number(input[0]);

for (let i = 0; i < totalLength; i++) {
    const [a, b] = input[i + 1].split(' ').map(Number);
    console.log(a + b);
}