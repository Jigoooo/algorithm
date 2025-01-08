const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const alphabetLower = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
const targetStringArray = input[0].split('');
const result = [];

for (let i = 0; i < alphabetLower.length; i++) {
    const indexOfAlphabet = targetStringArray.indexOf(alphabetLower[i]);
    if (indexOfAlphabet === -1) {
        result.push(-1);
    } else {
        result.push(indexOfAlphabet);
    }
}

console.log(result.join(' '));