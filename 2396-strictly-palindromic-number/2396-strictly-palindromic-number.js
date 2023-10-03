/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    
    for(let i = 2; i < n; i++){
        var s = n.toString(i);
        var r = s.split("").reverse().join("")

        if(s !== r) return false;
    }

    return true;
};