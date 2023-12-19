
function solution(k, dungeons) {
   let answer = 0;

   const checkedArray = new Array(dungeons.length).fill(false);
    // [false, false, false]
   
    // 깊이 우선 탐색 함수 선언
function DFS(k, dungeons, count, checkedArray) {
    // 모든 경우의 수를 순회
   for (let i = 0; i < dungeons.length; i++) {
       // 방문하지 않았고 현재 피로도 k로 접근 가능한 곳을 접근
       if (!checkedArray[i] && k >= dungeons[i][0]) {
           // 방문 체크
           checkedArray[i] = true;
           // 재귀 호출
           DFS(k- dungeons[i][1], dungeons, count + 1, checkedArray);
           // 방문 체크 해제
           checkedArray[i] = false;
      }
  }
   // 최댓값을 구하기
   answer = Math.max(answer, count);
}
   DFS(k, dungeons, 0, checkedArray)
   
   return answer;
}