function solution(dots) {
    const xList = dots.map(v => v[0]);
    const yList = dots.map(v => v[1]);
    
    let max_x = Math.max(...xList) - Math.min(...xList);
    let max_y = Math.max(...yList) - Math.min(...yList);
    
    
    return max_x * max_y;
}