const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let modifiedString = input;

for (let i = 0; i < croatia.length; i++) {
    const regex = new RegExp(croatia[i], 'g');
    modifiedString = modifiedString.replace(regex, 'X');
}

console.log(modifiedString.length);