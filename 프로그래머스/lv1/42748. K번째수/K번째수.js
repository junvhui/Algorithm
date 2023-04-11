function solution(array, commands) {
    let result = [];
    var arr = [];
    for(let i = 0; i < commands.length; i++){
        for(let j = commands[i][0]; j <= commands[i][1]; j++){
            arr.push(array[j-1])
        }
        arr.sort((a, b) => a - b);
        result.push(arr[commands[i][2] - 1 ]);
        arr = [];
    }
    return result;
}