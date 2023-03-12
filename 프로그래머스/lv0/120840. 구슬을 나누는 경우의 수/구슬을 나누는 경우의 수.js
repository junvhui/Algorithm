function solution(balls, share) {
    if (share === 0) return 1
    return  factorial(balls) / (factorial(balls - share) * factorial(share))
}

function factorial(n) {
    let re = BigInt(1)

    for (let i = 2; i <= n; i++) {
        re *= BigInt(i)
    }
    return re
}