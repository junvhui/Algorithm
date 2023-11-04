function solution(elements) {
    var set = new Set();
    var len = elements.length;
    
    for(let i = 1; i <= len; i++){
        for(let j = 0; j < len; j++){
            let sum = 0;
            for(let k = 0; k < i; k++){
                let index = j + k;
                if(index >= len){
                    index -= len
                }
                sum += elements[index];
            }
            set.add(sum)
        }
    }
    return set.size;
}