class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }
      
    // 값을 넣고, 오름차 순 정렬
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

    // 값을 빼고 오름차 순 정렬
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    // 자식 노드가 존재한다면
    while (currentIndex * 2 + 1 < this.heap.length) {
      // 왼쪽 자식이랑 오른쪽 자식 비교해서 더 작은 값의 인덱스 찾음
      let minChildIndex = currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] ? currentIndex * 2 + 2 : currentIndex * 2 + 1;
      
        
      // 현재 노드가 작은 자식 노드 값보다 작으면 최소 힙 충족하므로 break
      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }
      
      // 현재 노드와 최소값을 가진 자식 노드를 교환
      // 교환 후, 인덱스를 최소값을 가진 자식 노드의 인덱스로 갱신
      // 이 과정을 반복하여 최소 힙의 성질을 유지
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  // 스코빌 지수 오름차순 유지
  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++;
  }

  // 최소 힙의값이 K보다 크거나 같으면 mixedCount 출력
  return minHeap.peek() >= K ? mixedCount : -1;
}