function solution(x) {
    
    let s = x.toString().split("")
    let n = 0;
    
    for(let i = 0; i < s.length; i++){
        n += parseInt(s[i]);
    }
    return x % n ? false : true

}