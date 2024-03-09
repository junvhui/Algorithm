const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

let N = Number(input[0]);

let summary = 0;

for(let i = 1; i <= N; i++){
  let data = input[i];
  if(check(data)) summary += 1
}

console.log(summary)


 
function check(data){
  let setData = new Set(data[0]);
  for(let i = 0; i < data.length; i++){
    if(data[i] !== data[i+1]){
      if(setData.has(data[i+1])){
        return false;
      }else{
        setData.add(data[i+1])
      }
    }
  }
  return true;
}
