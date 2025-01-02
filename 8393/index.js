const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './8393/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const a = input[0];

let sum = 0;

for (let i = 1; i <= a; i++) {
    sum += i;
}

console.log(sum);