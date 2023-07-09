function solution(babbling) {
    var possible = ['aya', 'ye', 'woo', 'ma'];
    var count = 0;
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < possible.length; j++){
            if(babble.includes(possible[j].repeat(2))){
                break;
            }
            babble = babble.split(possible[j]).join(" ");
        }
        console.log(babble)
            if(babble.split(" ").join("").length === 0){
                count += 1;
            }
        
    }
    return count;

}

