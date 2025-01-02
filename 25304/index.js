const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './25304/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const totalAmount = Number(input[0]);
const count = Number(input[1]);
let sum = 0;

for (let i = 2; i <= count + 1; i++) {
    const [a, b] = input[i].split(' ');
    sum += Number(a) * Number(b);
}

console.log(totalAmount === sum ? 'Yes' : 'No');