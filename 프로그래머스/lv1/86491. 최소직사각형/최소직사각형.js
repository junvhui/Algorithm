function solution(sizes) {
    var max = [];
    var min = [];
    for(let i = 0; i < sizes.length; i++){
        min.push(Math.min(...sizes[i]))
    }
    let mins_max = Math.max(...min)
    
    for(let i = 0; i < sizes.length; i++){
        max.push(Math.max(...sizes[i]))
    }
    let maxs_max = Math.max(...max)
    return mins_max * maxs_max;
}