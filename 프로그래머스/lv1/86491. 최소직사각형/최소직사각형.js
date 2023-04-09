function solution(sizes) {
    var min = [];
    var max = [];
    for(let i = 0; i < sizes.length; i++){
        min.push(Math.min(...sizes[i]))
    }
    let min_max = Math.max(...min)
    
    for(let i = 0; i < sizes.length; i++){
        max.push(Math.max(...sizes[i]))
    }
    let max_max = Math.max(...max)
    return min_max * max_max;
}