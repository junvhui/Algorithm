function solution(x) {
    
    var s = x.toString().split("")
    var n = 0;
    
    for(let i = 0; i < s.length; i++){
        n += parseInt(s[i]);
    }
    return x % n ? false : true

}