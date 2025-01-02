const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
const count = input[0];

let result = Array.from({ length: count }, (_, i) => '*'.repeat(i + 1)).join('\n');


// let result = '';
//
// for (let i = 1; i <= count; i++) {
//     if (i === count) {
//         for (let j = 0; j < i; j++) {
//             result += '*';
//         }
//         continue;
//     }
//
//     for (let j = 0; j < i; j++) {
//         if (j === i - 1) {
//             result += '*\n';
//         } else {
//             result += '*';
//         }
//     }
// }

console.log(result);