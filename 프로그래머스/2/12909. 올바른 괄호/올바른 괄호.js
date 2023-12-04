function solution(s){
    var stack = [];
    
    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        
        if(stack[stack.length - 1] === ")" && stack[stack.length - 2] === "("){
            stack.pop();
            stack.pop();
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