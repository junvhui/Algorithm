function solution(numbers, hand) {
  let answer = [];
  let leftHandPosition = "*";
  let rightHandPosition = "#";

  numbers.forEach((num) => {                        
    if (num === 1 || num === 4 || num === 7) {      // 1, 4, 7 일 경우
      answer.push("L");                             // L 추가
      leftHandPosition = num;                       // 왼손 포지션을 그 숫자로
      return;
    }

    if (num === 3 || num === 6 || num === 9) {      // 3, 6, 9 일 경우
      answer.push("R");                             // R 추가
      rightHandPosition = num;                      // 오른손 포지션을 그 숫자로
      return;
    }
    
    // 왼손, 오른손 거리 구하기
    const leftHandDistance = getDistance(leftHandPosition, num);
    const rightHandDistance = getDistance(rightHandPosition, num);

    if (leftHandDistance === rightHandDistance) {
      if (hand === "right") {
        answer.push("R");
        rightHandPosition = num;
        return;
      } else {
        answer.push("L");
        leftHandPosition = num;
        return;
      }
    }

    if (leftHandDistance > rightHandDistance) {
      answer.push("R");
      rightHandPosition = num;
    } else {
      answer.push("L");
      leftHandPosition = num;
    }
  });

  return answer.join("");
}

const getDistance = (locatedNumber, num) => {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const nowPosition = keyPad[locatedNumber];
  const targetPosition = keyPad[num];

  return (
    Math.abs(targetPosition[0] - nowPosition[0]) +
    Math.abs(targetPosition[1] - nowPosition[1])
  );
};