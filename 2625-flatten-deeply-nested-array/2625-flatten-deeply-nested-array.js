var flat = function (array, flattenDepth) {

    // if n is 0, no flattening is required, hence return the original array    
    if (flattenDepth == 0){
        return array
    }

    const flattenedArray = []

    for(let index=0; index < array.length; index++){

        const currElement = array[index]

        // recursively call the function for this array
        // and push the flattened array to the answer array

        if (Array.isArray(currElement) &&flattenDepth >= 1) {
            
            const subarray = array[index]
            const recursiveArray = flat(subarray, flattenDepth - 1)
            
            flattenedArray.push(...recursiveArray)

            flattenedArray
        }

        else if (Array.isArray) {
            flattenedArray.push(currElement)
            flattenedArray
        }
    }
    
    return flattenedArray
}

// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))

// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 5))