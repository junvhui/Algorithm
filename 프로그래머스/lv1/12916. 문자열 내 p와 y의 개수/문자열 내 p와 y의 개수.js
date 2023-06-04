function solution(s){
    var answer = true;
    var spl = s.split("")
    var p_c = 0;
    var y_c = 0;
    for(let i = 0; i < spl.length; i++){
        if(spl[i] == "p" || spl[i] =="P"){
            p_c += 1;
        }else if(spl[i] == "y" || spl[i] == "Y"){
            y_c += 1;
        }
    }
    if(p_c == y_c){
        return true;
    }else{
        return false;
    }
}