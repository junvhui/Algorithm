
function solution(cacheSize, cities) {

    if (cacheSize === 0) return cities.length * 5;     

    const caches = [];
    const cacheHit = 1;
    const cacheMiss = 5;
    let answer = 0;

    for (const city of cities) {
        const cityLowerCase = city.toLowerCase();
        const indexOfCity = caches.indexOf(cityLowerCase); // 없으면 -1

        if (caches.length < cacheSize && indexOfCity === -1) {  // 처음에는 없으니까 
            caches.push(cityLowerCase);                         // caches 배열에 값 넣고
            answer += cacheMiss;                                // +5
            continue;
        }

        if (indexOfCity === -1) {                               // caches 배열에 없으면 가장 먼저 들어온거 뽑음
            caches.shift();
            answer += cacheMiss;
        } else {                                                // 이미 있는 경우
            caches.splice(indexOfCity, 1);
            answer += cacheHit;
        }
        caches.push(cityLowerCase);
    }
    return answer;
}