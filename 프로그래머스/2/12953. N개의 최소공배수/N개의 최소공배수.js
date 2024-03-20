function solution(arr) {
    
    let result = arr[0];
    let len = arr.length;
    
    for(let i=0; i<len-1; i++){
      result = lcm(result,arr[i+1])
    }
    return result;
}

// 최대공약수
function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}
