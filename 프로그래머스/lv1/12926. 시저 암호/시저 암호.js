function solution(s, n) {
    var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var answer = '';
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == " "){
            answer += " ";
            continue;
        }
        var size = big.includes(s[i]) ? big : small;
        var index = size.indexOf(s[i]) + n
        if(index >= size.length){
            index -= size.length;
        }
        answer += size[index]
    }
   return answer
}
