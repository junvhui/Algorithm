function solution(babbling) {
    var answer = 0;
    const basic_words = ["aya", "ye", "woo", "ma"];
    for(let i of babbling) {
        let check = i;
        
        for(let word of basic_words){
            check = check.replace(word, " "); 
        }
        
        check = check.replaceAll(" ","");
        if (check === ""){
            answer += 1;
        }
    }
    
    return answer;
}