function solution(s) {
    var arr_s = [];      //같은 값 배열
    var arr_d = [];      //다른 값 배열
    var result = 0;
    for(let i = 0; i < s.length; i++){
        if(arr_s.length < 1){        // 빈 배열이라면
            arr_s.push(s[i])         // 같은 값 배열에 s[i] 값 일단 추가
            result += 1              // 하나만 남아도 분해되기때문에 바로 result 올려버림
            continue;
        }
        if(arr_s.length !== arr_d.length){        // 만약 arr_s, arr_d 길이가 다르면서
            if(arr_s[0] == s[i]){                 // arr_s 값이랑 현재의 값이 같으면
                arr_s.push(s[i])                  // 같은 값 배열인 arr_s에 넣고
            }else{                                // 다르면
                arr_d.push(s[i])                  // 다른 값 배열인 arr_d에 넣음
            }
            if(arr_s.length == arr_d.length){     // 이렇게 했을 경우 arr_s, arr_d의 길이가 같으면 
                 arr_s = []                       // 다음 분해로 넘어가야하므로 빈 배열로 만들어줌
                 arr_d = []
             }
        }
    }
    return result;
    
}