function solution(n, words) {
    let stack = [];                     // 글자 넣어줄 스택
    let answer = [0, 0];
    
    for(let i = 0; i < words.length; i++){
        if(stack.length === 0){         // 만약 스택이 비었다면
            stack.push(words[i]);       // 글자 넣고
            continue;
        }
        let pre = stack[stack.length - 1];  // 이전 단어
        let preWord = pre[pre.length - 1];  // 이전 단어의 마지막 글자
        
        var now = words[i];                 // 현재 단어
        var nowWord = now[0];               // 현재 단어의 첫 글자
        
        if(preWord !== nowWord || stack.includes(now)){     // 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다르거나, 
                                                            // 스택에 현재 단어가 있으면
            var x = (i % n) + 1;                            // 몇 번째 사람 x는 i를 사람 수로 나눈 + 1 값 
            var y = Math.ceil((i + 1) / n);                 // 몇 번째 단어 y는 i+1 을 사람 수로 나눈 올림 값
            
            answer[0] = x;
            answer[1] = y;
            break;
        }
        
        stack.push(words[i]);                           // 해당사항 없으면 스택에 단어 넣기
    }
    
    return answer;
}