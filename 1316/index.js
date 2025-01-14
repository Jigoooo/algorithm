const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const count = Number(input[0]);
let result = 0;

for (let i = 1; i <= count; i++) {
    const targetString = input[i];
    const seen = new Set();
    let prev = null;
    let isGroupWord = false;

    for (const char of targetString) {
        if (seen.has(char) && prev !== char) {
            isGroupWord = false;
            break;
        }

        seen.add(char);
        prev = char;
        isGroupWord = true;
    }

    if (isGroupWord) {
        result += 1;
    }
}

console.log(result);