var generateMatrix = function(num) {
    
    const spiralMatrix = new Array(num).fill(0).map((zero) => new Array(num).fill(0))

    let increment = 0
    const numOfMatrixElements = num * num

    let leftIndex = 0
    let rightIndex = num - 1
    
    // the topIndex row of the matrix is the first subarray, matrix[0]
    let topIndex = 0
    let bottomIndex = num -1
    
    // kind of a "gapped" ordering 
    // first doing ascending order and second doing descending order
    
    // left-right  (asc)
    // top-botom (asc)
    // right-left (desc)
    // bottom-top (desc)
    
    while (increment < numOfMatrixElements) {
        
        // going leftIndex
        // chained to the topIndex

        for (let leftToRightIndex = leftIndex; leftToRightIndex <= rightIndex; leftToRightIndex++) {

            increment += 1

            //spiralMatrix[0][1]
            //spiralMatrix[0][2]

            spiralMatrix[topIndex][leftToRightIndex] = increment
            spiralMatrix
        }
        
        // go down 1
        topIndex += 1
        
        // going down
        // chained to the rightIndex
        
        topIndex
        bottomIndex

        for (let topToBottomIndex = topIndex; topToBottomIndex <= bottomIndex; topToBottomIndex++) {

            increment += 1

            spiralMatrix[topToBottomIndex][rightIndex] = increment
            spiralMatrix
        }
        
        rightIndex -=1
        
        // rightIndex-to-leftIndex
        // chained to the bottomIndex

        for (let rightToLeftIndex = rightIndex; rightToLeftIndex >= leftIndex; rightToLeftIndex--) {

            increment += 1

            spiralMatrix[bottomIndex][rightToLeftIndex] = increment
            spiralMatrix
        }

        bottomIndex -= 1

        // going up
        // chained to the leftIndex 

        for (let bottomToTopIndex = bottomIndex; bottomToTopIndex >= topIndex; bottomToTopIndex--) {

            increment += 1
            
            spiralMatrix[bottomToTopIndex][leftIndex] = increment
            spiralMatrix
        }
        
        leftIndex += 1
    }
    
    return spiralMatrix
}

console.log(generateMatrix(3),  
            [[1,2,3],
             [8,9,4],
             [7,6,5]])