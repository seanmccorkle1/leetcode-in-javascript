/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the number isn't really important. Learning from the question you've solved is more important.
 * 
 * @param summaryRanges([0, 1, 2, 4, 5, 7])
 * @return  ["0->2", "4->5", "7"]
 * @explain
*/


var summaryRanges = function (array) {

    const rangeArray = []
    const missingNumbers = []

    let missingNum = 0
    let leftIndex = 0


    // index <= array.length
    // start at index=1 for the difference 
    
    // 7+1 != undefined  = true
    // the if statement will always execute on the last element (undefined)


    for (let index = 1; index <= array.length; index++) {

        let startOfRange = array[leftIndex]

        let leftNum = array[index - 1]
        let rightNum = array[index]

        
        startOfRange
        leftNum
        rightNum

        // rightNum and leftNum converge on the last loop

        // this if statement will (maybe) always execute on the last loop
        // at least its [7, undefined] for the first one
    

        leftNum + 1
        rightNum
        
        const rangeFond = (leftNum + 1 != rightNum)

        if ((leftNum + 1) != rightNum) {      //   || index == array.length)

            leftNum 
            // let startOfRange = array[leftIndex]
            leftNum
            rightNum

            // if (array[leftIndex] != leftNum)

            // case: there are multiple numbers in the range

            leftNum

            // 3 != 7, so push the range '3->7'

            missingNum = leftNum + 1
            missingNumbers.push(missingNum)


            if (startOfRange != leftNum) {                
                let inclusiveRange= `${startOfRange}->${leftNum}`
                rangeArray            
                rangeArray.push(inclusiveRange)

                rangeArray
            }
        
            // 7 == 7, its just one number (7)
            
            else if (startOfRange == leftNum) {
                rangeArray.push(leftNum.toString())
                rangeArray
            }

            // store the index of `rightNum` in leftIndex
            // only do this when the non-nested if statement executes

            startOfRange
            leftNum
            rightNum

            // ignore "6" and undefined

            leftIndex
            index

            rangeArray

            array[leftIndex]
            
            leftIndex = index
            array[leftIndex]

        }
    }

    return rangeArray
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"], "break at 3 and at 6, total of 3 ranges. 7 is left alone at the end")

// console.log(summaryRanges([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"])