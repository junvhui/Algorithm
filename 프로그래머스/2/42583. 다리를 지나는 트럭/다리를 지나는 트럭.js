function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = [];
    let bridge_weight = 0;
    while (truck_weights.length > 0) {
        answer++;
        // 만약 현재 다리에 있는 트럭 수가 다리에 올라갈 수 있는 트럭 수와 같으면
        if (bridge.length === bridge_length) {
            // 현재 다리의 무게에서 다리의 제일 앞 트럭의 무게를 뺀다
            bridge_weight -= bridge.shift();
        }
        // 만약 현재 다리의 무게에 들어올 트럭의 무게를 더한 값이 다리가 견딜 수 있는 무게보다 크다면
        if (bridge_weight + truck_weights[0] > weight) {
            // 다리에 0을 올려줌
            bridge.push(0);
            continue;
        }
        // truck_weights의 제일 첫 값이 현재 트럭의 무게
        let truck_weight = truck_weights.shift();
        // 다리에 현재 트럭을 올림
        bridge.push(truck_weight);
        // 다리 무게에 현재 트럭의 무게를 더해줌
        bridge_weight += truck_weight;
    }

    answer += bridge_length;

    return answer;
}