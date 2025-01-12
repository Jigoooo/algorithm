const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim();
const textArray = input.split('').map(text => text.toUpperCase());
const repeatObject = {};

for (let i = 0; i < textArray.length; i++) {
    if (repeatObject[textArray[i]]) {
        repeatObject[textArray[i]] += 1;
        continue;
    }

    repeatObject[textArray[i]] = 1;
}

const maxValue = Math.max(...Object.values(repeatObject));
const maxKeys = Object.keys(repeatObject).filter(key => repeatObject[key] === maxValue);

console.log(maxKeys.length > 1 ? '?' : maxKeys[0]);