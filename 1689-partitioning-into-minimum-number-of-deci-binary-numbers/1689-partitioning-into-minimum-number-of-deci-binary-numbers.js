/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    var max = 0
    var i = 0
    while (i < n.length){
        if (parseInt(n[i]) > max){
            max = parseInt(n[i])
        }
        i += 1
    }
    return max
};