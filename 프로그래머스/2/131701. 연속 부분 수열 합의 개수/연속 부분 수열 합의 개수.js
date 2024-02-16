function solution(elements) {
    var set = new Set();
    var len = elements.length;
    
    for(let i = 1; i <= len; i++){
        for(let j = 0; j < len; j++){       // 시작좌표
            let sum = 0;
            for(let k = 0; k < i; k++){     // 시작좌표 + k
                let index = j + k;
                if(index >= len){           // index 가 길이보다 크면 길이만큼 빼줌
                    index -= len
                }
                sum += elements[index];
            }
            set.add(sum)                    // set 사용 시 중복 자동 제거
        }
    }
    return set.size;
}