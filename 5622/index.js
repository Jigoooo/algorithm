const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split(' ');
const inputDialAlphabetString = input[0].split('');
let result = 0;

const dialAlphabet = {
    3: 'ABC',
    4: 'DEF',
    5: 'GHI',
    6: 'JKL',
    7: 'MNO',
    8: 'PQRS',
    9: 'TUV',
    10: 'WXYZ',
};

for (let i = 0; i < inputDialAlphabetString.length; i++) {
    for (const [key, value] of Object.entries(dialAlphabet)) {
        if (value.includes(inputDialAlphabetString[i])) {
            result += Number(key);
        }
    }
}

console.log(result);