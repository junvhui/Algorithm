const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = input.shift();               // 전체 학생 수

let arr = [];
for (let i = 0; i < N; i++) {
    const [name, kor, eng, math] = input[i].split(' ');
    arr.push([name, kor, eng, math]);
}

let answer = '';
arr.sort((a, b) => {
    //국어 점수가 감소하는 순서로
    if (a[1] !== b[1]) {
        return b[1] - a[1];
    //국어 점수가 같으면 영어 점수가 증가하는 순서로
    }else if(a[1] === b[1] && a[2] !== b[2]) {
        return a[2] - b[2];
    //국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
    }else if(a[1] === b[1] && a[2] === b[2] && a[3] !== b[3]) {
        return b[3] - a[3];
    //모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로
    }else {
        if(a[0] > b[0]) return 1;
        if(a[0] < b[0]) return -1;
    }
})
.forEach(e=>{
    answer += `${e[0]}\n`
})
console.log(answer);