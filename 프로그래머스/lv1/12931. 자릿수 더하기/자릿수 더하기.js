function solution(n)
{
    var answer = 0;
    let s = n.toString().split("")

    return s.reduce((a, b) => a + parseInt(b), 0);
}