
var arrayPairSum = function(array) {
    
    // limit the ranges for max problems?
    array.sort((a,b) => a - b)

    array = array.filter((n, index) =>((index % 2) == 0) ? "pass" : false)

    let maxSumOfMinPairs = array.reduce((sum,curr) => sum+curr, 0)
    return maxSumOfMinPairs
}
