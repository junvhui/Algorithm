function solution(n, arr1, arr2) {
    var answer = [];
    var i = 0, j = 0, q = 0;
    for(i = 0; i < n; i++){
    answer[i]=(arr1[i] | arr2[i]).toString(2);     
    q = n - (answer[i].length);
    for(j = 0; j < q; j++){
        answer[i] = "0" + answer[i];
    }
    }

                for(i = 0; i < n; i++){
        answer[i]=answer[i].replace(/1/g,"#").replace(/0/g," ");
    }
    return answer;
}