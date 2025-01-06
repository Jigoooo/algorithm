const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const allStudentArray = Array.from({ length: 30 }, (_, i) => i + 1);

console.log(allStudentArray.filter(number => !input.includes(number)).join('\n'));