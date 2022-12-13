/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    // exp that is below 1 will always be a lower number
    let sqrt = num ** .5
    
    if (sqrt == parseInt(sqrt)){
        return true
    }
    else return false 
}