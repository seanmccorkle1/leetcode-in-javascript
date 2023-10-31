var findArray = function(array) {
    
    const returnArray = new Array(array.length)
    returnArray[0] = array[0]
    
    returnArray

    for (let index=1; index < array.length; index++) {

        let rightNum= array[index]
        let leftNum= array[index - 1]
        
        returnArray[index] = leftNum ^ rightNum
    }
    
    return returnArray
}

console.log(findArray([5,2,0,3,1]), [5,7,2,3,2])


// From the array [5,7,2,3,2]:
// - array[0] = 5.
// - array[1] = 5 ^ 7 = 2.
// - array[2] = 5 ^ 7 ^ 2 = 0.
// - array[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - array[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.