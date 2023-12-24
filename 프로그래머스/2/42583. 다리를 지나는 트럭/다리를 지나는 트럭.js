function solution(bridge_length, weight, truck_weights) {
    var answer = 0; // 초
    var sum = 0;    // 현재 다리의 무게
    var queue = new Array(bridge_length);
    
    // [0,0,0,0,0....]
    queue.fill(0);

    // queue가 존재할 동안
    while(queue.length > 0){
        // 초 증가
        answer++;
        // 총 무게에서 지나간 트럭 무게 뺌
        sum -= queue.shift();
        
        // 만약 대기중인 트럭이 존재하면서
        if(truck_weights.length > 0){
            // 현재 다리의 무게에 대기중인 트럭 중 제일 첫 트럭의 무게를 더한 값이 제한 무게보다 작다면
            if(sum + truck_weights[0] <= weight){
                let truck = truck_weights.shift();
                // 다리 무게에 대기중인 첫 트럭의 무게를 더해주고
                sum += truck;
                // 큐(다리)에 트럭을 올림
                queue.push(truck);
            }
            // 제한 무게보다 크면 그냥 0 추가
            else{
                queue.push(0);
            }
        }
    }
    return answer;
}