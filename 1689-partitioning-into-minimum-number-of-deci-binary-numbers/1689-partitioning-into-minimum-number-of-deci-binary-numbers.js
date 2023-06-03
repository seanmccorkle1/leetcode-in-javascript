/**
 * @param {string} n
 * @return {number}
 */

var minPartitions = function(stringnum) {
    const digitArray = stringnum.split("")
    let highestDigit = Math.max(...digitArray)
    return Number(highestDigit)
}