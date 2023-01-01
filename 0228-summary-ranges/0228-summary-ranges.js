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
    var rangeFound = false


    let missingNum = 0
    let prevIndex = 0



    // currIndex <= array.length
    // start at currIndex=1 for the difference 
    
    // 7+1 != undefined  = true
    // the if statement will always execute on the last element (undefined)



    for (let currIndex = 1; currIndex <= array.length; currIndex++) {


        let startOfRange = array[prevIndex]


        let currNum = array[currIndex - 1]
        let rightNum = array[currIndex]

        
        startOfRange
        currNum
        rightNum


        // rightNum and currNum converge on the last loop


        // this if statement will (maybe) always execute on the last loop
        // at least its [7, undefined] for the first one
    


        currNum + 1
        rightNum
        
        const numberIsMissing = (currNum + 1 != rightNum)
        
        // the last number will always either be the end of a range 
        // or it will be its own range
        
        
        if (numberIsMissing || array[currIndex] == undefined) {
            
            currNum 
            // let startOfRange = array[prevIndex]
            currNum
            rightNum


            // if (array[prevIndex] != currNum)


            // case: there are multiple numbers in the range


            currNum


            // 3 != 7, so push the range '3->7'


            missingNum = currNum + 1
            missingNumbers.push(missingNum)
            
            let endOfRange = currNum


            rangeFound = (startOfRange != endOfRange)


            if (rangeFound) { 
                let inclusiveRange=  startOfRange+"->" + endOfRange
                rangeArray.push(inclusiveRange)
            }


            // 7 == 7, its just one number (7)


            else if (!rangeFound) {
                rangeArray.push(endOfRange.toString())
                rangeArray
            }


            // store the currIndex of `rightNum` in prevIndex
            // only do this when the non-nested if statement executes


            startOfRange
            currNum
            rightNum


            // ignore "6" and undefined


            prevIndex
            currIndex


            rangeArray


            array[prevIndex]
            
            prevIndex = currIndex
            array[prevIndex]


        }
    }


    return rangeArray
}


console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"], "break at 3 and at 6, total of 3 ranges. 7 is left alone at the end")


// console.log(summaryRanges([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"])