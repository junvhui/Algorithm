/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var split_address = address.split('.').join('[.]')
    return split_address
};