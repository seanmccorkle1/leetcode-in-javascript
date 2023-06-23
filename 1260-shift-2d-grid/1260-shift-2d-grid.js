var shiftGrid = function(matrix, k) {
    
    // k %= Math.pow(matrix.length, 2)
    k %= matrix.flat().length
    let flatMatrix =matrix.flat(1)

    const newMatrix= flatMatrix.slice(-k).concat(flatMatrix.slice(0, -k))
    let step = matrix[0].length

    let array = []
    let index = 0

    while (index < newMatrix.length){
        array.push(newMatrix.slice(index, index + step))
        index += step
    }

    newMatrix

    return array
    flatMatrix
}

shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4)
// shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)  // [[9,1,2],[3,4,5],[6,7,8]]