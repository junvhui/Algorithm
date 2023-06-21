function solution(s){
    var answer = true;
    var spl = s.split("")
    var p_count = 0;
    var y_count = 0;
    for(let i = 0; i < spl.length; i++){
        if(spl[i] == "p" || spl[i] =="P"){
            p_count += 1;
        }else if(spl[i] == "y" || spl[i] == "Y"){
            y_count += 1;
        }
    }
    if(p_count == y_count){
        return true;
    }else{
        return false;
    }
}