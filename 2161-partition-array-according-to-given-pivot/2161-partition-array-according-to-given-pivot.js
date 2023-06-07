var pivotArray = function(array, pivot) {

    let smallerArray = []
    let greaterArray = []
    let equalArray = []

    for (let index = 0; index < array.length; index++){

        const num = array[index]

        if (num < pivot) {
            smallerArray.push(num)
        }

        else if (num > pivot) {
            greaterArray.push(num)
        }
        
        else if (num == pivot)  {
            equalArray.push(num)
        }
        
    }
    
    return [...smallerArray,...equalArray,...greaterArray]
    // return smallerArray.concat(equalArray).concat(greaterArray)
    // return smallerArray.concat(equalArray, greaterArray)
}

console.log(pivotArray([9,12,5,10,14,3,10], 10), [9,5,3,10,10,12,14])