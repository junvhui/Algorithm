function solution(n, left, right) {
let answer = [];

    while (left <= right) {
        answer.push(Math.max(Math.floor(left / n), left++ % n) + 1);
    }

    return answer;
}


// x, y 좌표 값 구해서 더 큰 값 + 1 을 넣어줌