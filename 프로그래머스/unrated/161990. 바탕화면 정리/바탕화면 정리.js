function solution(wallpaper) {
    var min_i = 51;
    var min_j = 51;
    var max_i = 0;
    var max_j = 0;
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] == "#"){
                if(max_i < i){
                    max_i = i
                }
                if(max_j < j){
                     max_j = j
                }
                if(min_i > i){
                    min_i = i
                }
                if(min_j > j){
                    min_j = j
                }
                
            }
        }
    }
    return [min_i, min_j, max_i+1, max_j+1];
}