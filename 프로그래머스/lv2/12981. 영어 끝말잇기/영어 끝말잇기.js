function solution(n, words) {
    var stack = [];
    var answer = [0, 0];
    
    for(let i = 0; i < words.length; i++){
        if(stack.length === 0){
            stack.push(words[i]);
            continue;
        }
        var pre = stack[stack.length - 1];
        var preWord = pre[pre.length - 1];
        
        var now = words[i];
        var nowWord = now[0];
        
        if(preWord !== nowWord || stack.includes(now)){
            var x = (i % n) + 1;
            var y = Math.ceil((i + 1) / n);
            
            answer[0] = x;
            answer[1] = y;
            break;
        }
        
        stack.push(words[i]);
    }
    
    return answer;
}