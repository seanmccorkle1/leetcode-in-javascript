
var arrayPairSum = function(array) {
    return array.sort((a,b) => a - b).filter((n, index) =>index % 2 == 0 ? "pass" : false).reduce((sum,curr) => sum+curr)
}