var summaryRanges = function (array) {

    const rangeArray = []
    let leftIndex = 0 // init

    // rightIndex <= array.length
    // start at rightIndex=1 for the difference 

    // the if statement will always execute on the last element (undefined)

    //  currNum is at array[index - 1]
    // in order to get the last number inside currNum, you have to do index + 1
    //[lastNum (curr)], undefined (rightNum)


    for (let rightIndex = 1; rightIndex <= array.length; rightIndex++) {

        rangeArray
        leftIndex

        let startOfRange = array[leftIndex]

        let leftNum = array[rightIndex - 1]
        let endOfRange = leftNum // helper

        let rightNum = array[rightIndex]

        startOfRange
        leftNum
        rightNum

        // rightNum and currNum converge on the last loop
        // this if statement will (maybe) always execute on the last loop
        // at least its [7, undefined] for the first one

        // the last number will always either be the end of a range 
        // or it will be its own range

        const discontinuityFound = (leftNum + 1) != rightNum

        if (discontinuityFound) {

            leftNum
            rightNum

            startOfRange
            endOfRange
            
            if (startOfRange != endOfRange) {
                rangeArray.push(`${startOfRange}->${endOfRange}`)
            }

            // 7 == 7, its just one number (7)
            
            else if (startOfRange == endOfRange) {
                rangeArray.push(leftNum.toString())
                rangeArray
            }

            rightIndex

            // only update leftIndex when theres a discontinuity
            // this changes `startOfRange` too, because (startOfRange = array[leftIndex])

            leftIndex

            // jump to 4 after "0->2"
            // you dont need 2 anymore

            leftIndex = rightIndex
            leftIndex
        }

    }

    return rangeArray
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"], "break at 3 and at 6, total of 3 ranges. 7 is alone at the end")

// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]), ["0","2->4","6","8->9"])