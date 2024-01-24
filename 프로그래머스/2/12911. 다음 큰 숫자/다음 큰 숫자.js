function solution(n) {
    let arr = n.toString(2).split('');               // 2진수로
    let count = arr.filter((v)=> v === "1").length   // 2진수에서 1만
    
    while(count !== count2){                            // 원래 1의 개수랑 다음 숫자의 1개수가 다르면 계속 진행
        n++
        var count2 = n.toString(2).split('').filter((one)=>one === "1").length; // 다음 숫자의 1의 개수 찾기
    }
    return n;                                           // 같으면 끝나므로 n 출력
}