const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let graph, visited, W, H;

// 섬의 개수 출력하는 함수
const howManyIslands = () => {
  let answer = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      // 방문하지 않았거나 지도가 1(땅)인 경우 answer증가 및 bfs실행
      if (!visited[i][j] && graph[i][j]) {
        answer++;
        bfs(i, j);
      }
    }
  }
  console.log(answer);
};

// BFS
const bfs = (Y, X) => {
  // 상하좌우 및 대각선 방향으로 인접한 x,y좌표들(8개)
  const ds = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
  const queue = [[Y, X]];

  while (queue.length) {
    const [curY, curX] = queue.shift(); // 현재 위치
		
	// 현재 위치에서 인접한 좌표들 탐색
    for (let i = 0; i < 8; i++) {
      const ny = curY + ds[i][1];
      const nx = curX + ds[i][0];
	
	  // 해당 좌표가 지도에서 벗어나지 않고, 방문하지 않았고, 땅인 경우, 방문처리하고 큐에 해당 좌표 담기
      if (ny >= 0 && ny < H && nx >= 0 && nx < W && !visited[ny][nx] && graph[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
};

// Test case가 여러 개 이므로 입력값 배열 slice하여 graph에 저장하고 반복
for (let idx = 0; idx < input.length - 1; idx++) {
  [W, H] = input[idx];
  graph = input.slice(idx + 1, idx + H + 1);
  idx += H;
  visited = Array.from(Array(H), () => Array(W).fill(false));

  howManyIslands(); // 섬의 개수 출력하는 함수 호출
}