
var minOperations = function(num) {
    
    // growths logarithmically
    let square = Math.pow(num, 2)
    return ~~(square / 4)
}