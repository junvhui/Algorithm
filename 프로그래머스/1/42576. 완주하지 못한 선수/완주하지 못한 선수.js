const solution = (participants, completed) => {
  // const completedRunners = new Map();            // 에러뜸
  // Map은 키와 값을 매핑하는 데이터 구조로, 키는 어떤 값이든 될 수 있습니다. 반면에 객체는 일반적으로 문자열이나 심볼과 같은 원시값만 키로 사용할 수 있습니다.
    
  let completedRunners = {};                                    // 완주한 선수 Map 생성
  let unFinishedRunner = '';                                    // 완주하지 못한 선수

  completed.forEach((runner) => {                               // 완주한 선수 Map에 값 이미 있으면 +1, 없으면 1 할당
    completedRunners[runner] = completedRunners[runner] + 1 || 1;
  });

  participants.forEach((runner) => {                            // 참여한 선수 Map에 완주한 선수 있으면 -1
    if (completedRunners[runner]) {
      completedRunners[runner] = completedRunners[runner] - 1;
    } else {                                                    // 없으면 완주하지 못한 선수 출력
      unFinishedRunner = runner;
    }
  });

  return unFinishedRunner;
}