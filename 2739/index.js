const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const a = input[0];

for(let i = 1; i <= 9; i++) {
    console.log(a + ' * ' + i + ' = ' + a * i);
}