function solution(polynomial) {
    const arr = polynomial.split(" + ")
    
    let xNum = 0;
    let num = 0;
    
    arr.forEach((n) => {
        
        if(n.includes("x")){
            const str = n.replace("x", "") || "1";
            xNum += parseInt(str);
        }else{
            
            num += parseInt(n)
        }
    })
    
    let answer = [];
    
    if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if (num) answer.push(num);
    
    
    return answer.join(" + ");
}