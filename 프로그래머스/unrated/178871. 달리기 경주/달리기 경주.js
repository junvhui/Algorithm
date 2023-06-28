function solution(players, callings) {
    var runner ={};             //obj생성
    players.map((p,index)=>{
        runner[p] = index;
    });
    
    for (let i = 0; i < callings.length; i++) {
        const callName = runner[callings[i]];
        const overtakedName = players[callName-1];

        //players 순서에 값 넣기 
        players[callName-1] = callings[i];
        players[callName] = overtakedName;

        //obj 값변경
        runner[callings[i]] = callName-1;
        runner[overtakedName]  = callName;
    }
    return players;
}