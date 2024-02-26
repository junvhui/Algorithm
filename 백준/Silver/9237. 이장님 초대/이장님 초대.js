const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
let days = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a)
  .map((v, i) => v + i + 2);
console.log(Math.max(...days));