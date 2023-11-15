
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    
    arr.sort((a,b)=> a - b)
    // return arr.reduce((sum,curr)=> sum += Math.min(curr, 1), 0)
    return arr.sort((a, b) => a - b).reduce((acc, num) => (acc = Math.min(acc + 1, num)), 0)
}