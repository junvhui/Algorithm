function solution(x) {
    var answer = true;
    let s = x.toString().split("")
    let n = 0;
    for(let i = 0; i < s.length; i++){
        n += parseInt(s[i]);
    }
        if(x % n == 0){
            return true;
        }else{
            return false;
        }

}