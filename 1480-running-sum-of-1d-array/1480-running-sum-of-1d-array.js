
var runningSum = function(array) {
 
    for (let index=1; index< array.length; index++){
        let twoSum = array[index] + array[index - 1]
        array[index] = twoSum
        
    }
    return array
}