function solution(k, tangerine) {
  var answer = 0;
  const tDict = {};
  tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);     // t에 해당하는 값이 tDict 객체에 이미 존재하는지 확인하고, 만약 없다면 0을 사용하여 초기화한 뒤 1을 더함
  const tArr = Object.values(tDict).sort((a, b) => b - a);      // tArr = [2,2,2,1,1]
  for (const t of tArr) {
        answer++;
        if (k > t){                                             // t가 k보다 작으면 k에서 t 빼주고 answer는 1 증가
            k -= t;
        }else{
            break;
        }
  }
  return answer;
}