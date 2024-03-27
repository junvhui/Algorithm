const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


function palindrome(x){
  return x == x.split('').reverse().join('');
}

let testCase = Number(input[0]);
for(let tc = 1; tc <= testCase; tc++) {
  let data = input[tc];
  if(palindrome(data)) console.log(0);  // 회문인 경우
  else{  // 회문이 아닌 경우
    let found = false;
    let n = data.length; // 문자열의 길이
    for(let i = 0; i < parseInt(n / 2); i++){
      if(data[i] != data[n - i - 1]){ // 대칭이 아닌 인덱스
        if(palindrome(data.slice(0, i) + data.slice(i + 1))) found = true;
        if(palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) found = true;
        break;
      }
    }
    if(found) console.log(1);
    else console.log(2);
  }
}
