function solution(s){
    var answer = true;
    let spl = s.split("")
    let p_c = 0;
    let y_c = 0;
    for(let i = 0; i < spl.length; i++){
        if(spl[i] == "p"){
            p_c += 1;
        }else if(spl[i] == "P"){
            p_c += 1;
        }else if(spl[i] == "y"){
            y_c += 1;
        }else if(spl[i] == "Y"){
            y_c += 1;
        }
    }
    if(p_c == y_c){
        return true;
    }else{
        return false;
    }
}