function solution(dots) {
    var answer = 0;
    let x = [];
    let y = [];
    for(let i = 0; i < dots.length; i++){
        x.push(dots[i][0])
        y.push(dots[i][1])
    }
    let max_x = Math.max(...x) - Math.min(...x);
    let max_y = Math.max(...y) - Math.min(...y);
    
    
    return max_x * max_y;
}