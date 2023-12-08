function solution(sizes) {
    let width = 0;
    let height = 0;
    for(let i = 0; i < sizes.length; i++){
        let [a, b] = sizes[i].sort((a, b) => a - b)
        console.log([a, b])
        if(a > width){
            width = a;
        }
        
        if(b > height){
            height = b;
        }
    }

    
    return width * height;
}







/*
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

*/