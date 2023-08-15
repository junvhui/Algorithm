function solution(n) {
    let arr = n.toString(2).split(''); 
    let count = arr.filter((one)=>one === "1").length
    let count2;
    while(count !== count2){
        n++
        count2 = n.toString(2).split('').filter((one)=>one === "1").length;
    }
    return n;
}