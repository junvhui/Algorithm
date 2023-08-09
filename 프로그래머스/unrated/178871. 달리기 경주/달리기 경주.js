function solution(players, callings) {
    //obj생성
    let runner = {};             
    players.map((p,index)=>{        // mumu : 0, soe : 1, poe : 2, kai : 3 이런식으로 map
        runner[p] = index;
    });

    
    
    for(let i = 0; i < callings.length; i++) {
        const calledNameIdx = runner[callings[i]];         // 역전한 사람의 인덱스 값
        const overtakedName = players[calledNameIdx-1];    // 역전당한 사람은 불린 사람의 인덱스 - 1인 사람

        //players 순서에 값 넣기 
        players[calledNameIdx-1] = callings[i];            
        players[calledNameIdx] = overtakedName;            

        //obj 값변경
        runner[callings[i]] = calledNameIdx-1;
        runner[overtakedName]  = calledNameIdx;

    }
    return players;
}






/*
runner obj 생성해서 
mumu : 0 , soe : 1 , poe : 2, kai : 3, mine : 4 로 만듦

해설진에 불린 선수 : calledName = runner[calling[i]] 를 넣음 // calledName = 3
추월당한 선수 : overtakedName = players[calledName-1]; // 불린 선수보다 인덱스 1개 앞섬

해설진에 불린 선수를 players[calledName-1] 에 넣음
원래자리에는 추월당한 선수 넣음

runner obj의 값도 바꿔줘야하므로 runner[calling[i]] = calledName - 1;
추월당한 선수는 runner[overtakedName] = calledName


*/