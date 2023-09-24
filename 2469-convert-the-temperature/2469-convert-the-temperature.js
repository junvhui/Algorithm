/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    var kelvin = celsius + 273.15
    var Fahrenheit = celsius * 1.80 + 32.00

    return [kelvin, Fahrenheit]
};