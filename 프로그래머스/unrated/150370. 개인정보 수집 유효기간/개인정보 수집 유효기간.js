// 만료 날짜 구하는 함수
const getExpiredDate = (dateString, month) => {     //날짜, terms[1] 값으로
    let [year, mon, day] = dateString.split('.').map((v) => Number(v)); //날짜 각각 담고 숫자로 바꿔줌
    mon += month;                                   // 날짜에 보관 가능 날짜 더하기
    day -= 1;                                       // 5일이면 4일까지 보관이 가능하므로 1 빼줌
    if(day === 0) {                                 // 1을 뺐을 때 0이되면 
        day = 28;
        mon -= 1;
    }
    if(mon > 12){                                   // 12 초과하는 경우
        const month12Count = Math.floor(mon / 12);  // 30 40월 일 경우도 있으므로 
        mon = mon - 12 * month12Count;              // 12 * 횟수 를 빼줌
        year += month12Count;                       // 년도에는 초과된 만큼 더해줌
    }
    if(mon === 0){                                  // mon이 0이 되면
        mon += 12;                                  // mon에 12 더해주고
        year -= 1;                                  // 년도에는 1빼줌
    }
    return [year, mon, day];
}

function solution(today, terms, privacies) {
    var answer = [];
    privacies.forEach((privacy, index) => {      // forEach 사용해서 하나씩 꺼냄
        const [date, term] = privacy.split(' ')
        const termPeriod = Number(terms.find((innerTerm) => {
            return (innerTerm[0] === term)
        }).split(' ')[1])                       // 6 12 3 3 이런식으로 담김
        const [eYear, eMon, eDay] = getExpiredDate(date, termPeriod);  // 만료되는 날짜
        const [year, mon, day] = today.split('.').map(v => Number(v));

        let expired = false;
        if(year > eYear){                       // 만약 현재 년도가 만료 년도보다 크다면
            expired = true;                     // 만료됨
        }
        if(year === eYear && mon > eMon) {      // 만약 현재 년도는 같지만 현재 월이 크다면(지났다면)
            expired = true;                     // 만료됨
        }
        if(year === eYear && mon === eMon && day > eDay){   //위와 동일
            expired = true;
        }
        if(expired) {                           // 만약 만료되었다면
            answer.push(index + 1)              // 인덱스+1 값 저장
        }
    })
    return answer;
}