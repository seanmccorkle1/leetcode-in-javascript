/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(array) {
    

    // rearrange
    array = array.sort((a,b) => a - b)
    
    let difference = array[1] - array[0]

     // index = 1 was already checked
    let index = 2

    while (index < array.length){
        let newDifference = array[index] - array[index - 1]
        if (newDifference != difference){
            return false
        }
        
        index++ // at end
    }
    return true

    
}