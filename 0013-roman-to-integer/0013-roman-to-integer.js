/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
      const arr = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = arr[s[i]];
        const next = arr[s[i + 1]];

        if (current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
};