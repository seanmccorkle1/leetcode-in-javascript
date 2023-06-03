/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.filter(s => s.includes("+")).length - operations.filter(s => s.includes("-")).length
    
}