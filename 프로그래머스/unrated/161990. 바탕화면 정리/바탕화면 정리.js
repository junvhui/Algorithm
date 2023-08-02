function solution(wallpaper) {
    let min_i = 51;
    let min_j = 51;
    let max_i = 0;
    let max_j = 0;
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] == "#"){
                max_i = Math.max(max_i, i);
                max_j = Math.max(max_j, j);
                min_i = Math.min(min_i, i);
                min_j = Math.min(min_j, j);
            }
                
            }
        }
    return [min_i, min_j, max_i+1, max_j+1];
}