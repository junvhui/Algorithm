function solution(s){
    var stack = [];
    
    for(let i = 0; i < s.length; i++){
        stack.push(s[i])                        // stack에 하나씩 넣을 때
        
        if(stack[stack.length - 1] === ")" && stack[stack.length - 2] === "("){
                                                // 만약 넣은 값이랑 넣은 값 바로 이전 값이 "()" 이면
            stack.pop();                        // 둘다 빼
            stack.pop();                        // 빼
        }
    }

    return stack.length === 0 ? true : false;  
}




/*

function solution(s){
    let count = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            count += 1;             // (는 1점 
        }else{
            count -= 1;             // )는 -1점
            if(count < 0){          // )부터 시작하면 어차피 false 이므로
                return false;
            }
        }
    }
    return count === 0 ? true : false   // 합이 0인지 아닌지


}
*/