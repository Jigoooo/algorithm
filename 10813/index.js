const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [basketCount, changeCount] = input[0].split(' ').map(Number);
const basket = Array.from({ length: basketCount }, (v, k) => k + 1);

for (let i = 1; i <= changeCount; i++) {
    const [basketA, basketB] = input[i].split(' ').map(Number);

    [basket[basketA - 1], basket[basketB - 1]] = [basket[basketB - 1], basket[basketA - 1]];
}

console.log(basket.join(' '));