function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [a1, b1] = [Math.abs(a-n), Math.abs(b-n)]

        if(a1 === b1) return b-a

        return a1-b1
    })
}