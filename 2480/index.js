const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let money;

if (a === b && b === c) {
    money = 10000 + a * 1000;
} else if (a === b || a === c || b === c) {
    if (a === b || a === c) {
        money = 1000 + a * 100;
    } else {
        money = 1000 + b * 100;
    }
} else {
    money = Math.max(a, b, c) * 100;
}

console.log(money);