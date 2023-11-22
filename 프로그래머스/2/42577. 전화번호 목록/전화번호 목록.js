function solution(phone_book) {
    
    const map = new Map();

    for (let i = 0; i < phone_book.length; i++) {
        map.set(phone_book[i], 1);                              // '123'=> 1, '456' => 1, '789' => 1
    }

    for (let i = 0; i < phone_book.length; i++) {               
        for (let j = 0; j < phone_book[i].length; j++) {        // 길이만큼
            if (map.has(phone_book[i].substring(0, j))) {       // 만약 map 값 중에 substring 한 값을 가진게 존재하면
                return false;                                   // false
            }
        }
    }

    return true;
}