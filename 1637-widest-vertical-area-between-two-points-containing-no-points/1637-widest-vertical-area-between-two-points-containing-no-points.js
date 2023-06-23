var maxWidthOfVerticalArea = function(pointArray) {

    let widestDifference = 0

    pointArray

    pointArray = pointArray.map(subarray => subarray[0])
    pointArray.sort((a, b) => a - b)
    
    for(let index = 1; index < pointArray.length; index++){

        const currDifferenceOfAdjacentPoints = pointArray[index] - pointArray[index - 1]

        currDifferenceOfAdjacentPoints
        widestDifference

        widestDifference = Math.max(currDifferenceOfAdjacentPoints, widestDifference)
    }
    
    return widestDifference
}

console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]), 1)