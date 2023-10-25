function solution(s) {

    let result = 0;
    const arr = s.split('')

    for (let i = 0; i < s.length; i++) {
        arr.push(arr.shift())               // 맨 앞 문자 맨 뒤로 이동

        
    let stack = [];
    let flag = true;
        for(let s of arr){
            if(s === '{' || s === '[' || s === '(') {
                stack.push(s)
            } else {
                let curr = stack.pop();
                
                if(curr === '{' && s === '}'){
                    continue;
                }
                
                if(curr === '[' && s === ']') {
                    continue;
                }
                
                if(curr === '(' && s === ')'){
                    continue;
                }
                flag = false;
                break;
            }
        }
        
        if(flag && stack.length === 0){
            result++;
        }
    }
    
    
    return result;

}