function solution(phone_book) {
    const map = new Map();

    for (let i = 0; i < phone_book.length; i++) {
        map.set(phone_book[i], 1);
    }

    for (let i = 0; i < phone_book.length; i++) {
        for (let j = 0; j < phone_book[i].length; j++) {
            if (map.has(phone_book[i].substring(0, j))) {
                return false;
            }
        }
    }

    return true;
}
