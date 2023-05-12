var generateMatrix = function (num) {
    
    const spiralMatrix = new Array(num).fill(0).map(element => new Array(num).fill())

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

        
        for (let localLeftIndex = leftIndex; localLeftIndex <= rightIndex; localLeftIndex++) {

            increment += 1

            //spiralMatrix[0][1]
            //spiralMatrix[0][2]

            spiralMatrix[topIndex][localLeftIndex] = increment
            spiralMatrix
        }
        
        // go down 1
        topIndex += 1
        
        // going down
        // chained to the rightIndex
        
        topIndex
        bottomIndex

        for (let localTopIndex = topIndex; localTopIndex <= bottomIndex; localTopIndex++) {

            increment += 1

            spiralMatrix[localTopIndex][rightIndex] = increment
            spiralMatrix
        }
        
        rightIndex -=1
        
        // rightIndex-to-leftIndex
        // chained to the bottomIndex

        for (let localRightIndex = rightIndex; localRightIndex >= leftIndex; localRightIndex--) {

            increment += 1

            spiralMatrix[bottomIndex][localRightIndex] = increment
            spiralMatrix
        }

        bottomIndex -= 1

        // going up
        // chained to the leftIndex 

        for (let localBottomIndex = bottomIndex; localBottomIndex >= topIndex; localBottomIndex--) {

            increment += 1
            
            spiralMatrix[localBottomIndex][leftIndex] = increment
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