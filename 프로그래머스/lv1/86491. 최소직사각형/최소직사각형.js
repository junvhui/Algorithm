function solution(sizes) {
    var w = 0;
    var h = 0;
    for(let i = 0; i < sizes.length; i++){
        let [a, b] = sizes[i].sort((a,b) => a-b);
        if (a > h){
            h = a
        }
        if (b > w){
            w = b
        }
    };

    return w * h;
}