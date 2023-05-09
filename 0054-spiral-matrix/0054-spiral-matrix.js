var spiralOrder = function(matrix) {
    
    const array = []
    if (matrix.every(subarray => subarray.length == 1)){
        return matrix.flat(10)
    }
    while (matrix.length != 0) {
        
        const currFirstRow = matrix.shift()
        
        // use ... to keep it as a single array 
        array.push(...currFirstRow)
        
        for (const subarray of matrix) {
            
            if (subarray.length >= 1) {
                let lastNumOfSubarray = subarray.pop()
                array.push(lastNumOfSubarray)
            }
            
            // reverse is destructive
            
            subarray.reverse()
    }
        
        matrix.reverse()
  }
    return array
}

// push [8,7] to the top (reverse it) 
// to make it firstRow on the next iteration

// [5,4]
// [8,7]

// [8,7]
// [5,4]

console.log(
    spiralOrder([
    [1,2,3],
    [4,5,6],
    [7,8,9]]), [1,2,3,6,9,8,7,4,5])