
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    
    arr.sort((a,b)=> a - b)
    return arr.reduce((acc, num) => (acc = Math.min(acc + 1, num)), 0)
}