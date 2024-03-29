function solution(id_list, report, k) {
    let answer = new Array(id_list.length);     // id_list 길이만큼 새로운 배열 생성
    answer.fill(0);                             // [0, 0, 0, 0]

    let setReport = [...new Set(report)];       // report 중복제거
    let arr = [];
    let user = [];
    let reportingUser = [];
    let reportedUser = [];

    for (let i = 0; i < setReport.length; i++) {
        arr.push(setReport[i].split(' '));
    }
    console.log(arr)



    for (let i = 0; i < id_list.length; i++) {
        user.push({ name: id_list[i], reported: 0 });
    }
    // 신고자의 신고횟수 : 0 으로 세팅
    // user 는 신고한 유저

    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (user[i].name == arr[j][1]) {
                user[i].reported++;
            }
        }
    }

    for (let i = 0; i < user.length; i++) {
        if (user[i].reported >= k) {
            reportingUser.push(user[i].name);
        }
    }

    for (let i = 0; i < reportingUser.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (reportingUser[i] == arr[j][1]) {
                reportedUser.push(arr[j][0]);
            }
        }
    }

    for (let i = 0; i < reportedUser.length; i++) {
        for (let j = 0; j < user.length; j++) {
            if (reportedUser[i] == user[j].name) {
                answer[j]++;
            }
        }
    }
    return answer;
}
