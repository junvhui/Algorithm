function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        let arr = arr1[i];
        answer.push([]);
        for(let j = 0; j < arr2[0].length; j++){
            let sum = 0;
            for(let k = 0; k < arr2.length; k++){
                sum += arr[k] * arr2[k][j];
            }
            answer[i].push(sum);
        }
        
    }
    return answer;
}


// (2 * 5) + (3 * 2) + (2 * 3) = 22
// (2 * 4) + (3 * 4) + (2 * 1) = 22
// (2 * 3) + (3 * 1) + (2 * 1) = 11

// (4 * 5) + (2 * 2) + (4 * 3) = 36
// (4 * 4) + (2 * 4) + (4 * 1) = 28
// (4 * 3) + (2 * 1) + (4 * 1) = 18

// (3 * 5) + (1 * 2) + (4 * 3) = 29
// (3 * 4) + (1 * 4) + (4 * 1) = 20
// (3 * 3) + (1 * 1) + (4 * 1) = 14