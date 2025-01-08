const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const count = Number(input[0]);
const result = [];

for (let i = 1; i <= count; i++) {
    const [a, b] = input[i].split(' ');
    const repeatCount = Number(a);
    const targetStringArr = b.split('');
    const resultStringArr = targetStringArr.map((targetString) => targetString.repeat(repeatCount));

    result.push(resultStringArr.join(''));
}

console.log(result.join('\n'));