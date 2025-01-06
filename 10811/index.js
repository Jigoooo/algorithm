const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [basketCount, changeCount] = input[0].split(' ').map(Number);
const basket = Array.from({ length: basketCount }, (v, k) => k + 1);

for (let i = 1; i <= changeCount; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    const startIndex = start - 1;
    const endIndex = end - 1;

    const reversed = basket.slice(startIndex, endIndex + 1).reverse();

    for (let j = 0; j < reversed.length; j++) {
        basket[startIndex + j] = reversed[j];
    }
}

console.log(basket.join(' '));