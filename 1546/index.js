const path = require('path');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const scores = input[1].split(' ').map(Number);
const maxScore = Math.max(...scores);
const totalScore = scores.reduce((acc, cur) => {
    const newScore = cur / maxScore * 100;
    return acc + newScore;
}, 0);

console.log(totalScore / scores.length);