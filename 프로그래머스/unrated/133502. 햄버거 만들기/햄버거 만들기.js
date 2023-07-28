function solution(ingredient) {
  let answer = 0;
  let hamberger = [];

  for (let i of ingredient) {
    hamberger.push(i);

    if (hamberger.slice(-4).join('') == '1231') {   // 뒤에서부터 4개 slice 한 값이 1231이면
        hamberger.splice(-4)                        // 뒤에서부터 4개 없애버림
        answer++;                                   // 햄버거 1개 만든거니까 +1
    }
  }
  return answer;
}