function solution(s) {
    var mid_idx = Math.floor(s.length / 2)
    if(s.length % 2 === 0){
        return s[mid_idx-1] + s[mid_idx]
    }else{
        return s[mid_idx]
    }

}