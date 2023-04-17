function solution(n)
{
    let answer = 0;
    let s = n.toString().split("")

    return s.reduce((a, b) => a + parseInt(b), 0);
}