function solution(s) {
    var arr1 = [];
    var arr2 = [];
    var result = 0;
    for(let i = 0; i < s.length; i++){
        if(arr1.length < 1){
            arr1.push(s[i])
            result += 1
            continue;
        }
        if(arr1.length !== arr2.length){
            if(arr1[0] == s[i]){
                arr1.push(s[i])
            }else{
                arr2.push(s[i])
            }
            if(arr1.length == arr2.length){
                 arr1 = []
                 arr2 = []
             }
        }
    }
    return result;
    
}