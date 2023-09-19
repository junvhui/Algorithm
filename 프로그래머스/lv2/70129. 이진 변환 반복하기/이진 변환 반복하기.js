function solution(s) {
  var answer = [0, 0];

  while (s.length > 1) {
    let sLength = s.length;
    s = s.split("0").join("");
    answer[0] += 1
    answer[1] += (sLength - s.length);      // 원래 길이에서 0이 없어진 길이만큼 빼서 더해줌
    s = s.length.toString(2);
  }

  return answer;
}