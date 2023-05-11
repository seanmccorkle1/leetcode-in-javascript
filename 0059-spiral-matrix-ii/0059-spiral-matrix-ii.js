var generateMatrix = function(num) {
    
    const array = new Array(num).fill(0).map((zero) => new Array(num).fill(0))

    let increment = 0
    const numOfMatrixElements = num * num

    let left = 0
    let right = num - 1
    
    // kind of a "gapped" ordering 
    // first doing ascending order and second doing descending order
    
    // LR 
    // TB
    // RL
    // BT
    
    // the top row of the matrix is the first subarray, matrix[0]
    let top = 0
    let bottom = num -1
    
    while (increment < numOfMatrixElements) {
        
        // going left
        // chained to the top

        for (let leftToRightIndex = left; leftToRightIndex <= right; leftToRightIndex++) {

            increment += 1

            //array[0][1]
            //array[0][2]

            array[top][leftToRightIndex] = increment
            array
        }
        
        // go down 1
        top += 1
        
        // going down
        // chained to the right
        
        top
        bottom

        for (let topToBottomIndex = top; topToBottomIndex <= bottom; topToBottomIndex++) {

            increment += 1

            array[topToBottomIndex][right] = increment
            array
        }
        
        right -=1
        
        // right-to-left
        // chained to the bottom

        for (let rightToLeftIndex = right; rightToLeftIndex >= left; rightToLeftIndex--) {

            increment += 1

            array[bottom][rightToLeftIndex] = increment
            array
        }

        bottom -= 1

        // going up
        // chained to the left 

        for (let bottomToTopIndex = bottom; bottomToTopIndex >= top; bottomToTopIndex--) {

            increment += 1
            
            array[bottomToTopIndex][left] = increment
            array
        }
        
        left += 1
    }
    
    return array
}

console.log(generateMatrix(3),  
            [[1,2,3],
             [8,9,4],
             [7,6,5]])