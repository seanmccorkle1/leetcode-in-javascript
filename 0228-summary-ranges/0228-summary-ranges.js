var summaryRanges = function (array) {
    
    const rangeArray = []
    let leftIndex = 0
    
    // rightIndex <= array.length
    // start at rightIndex=1 for the difference 
    
    // 7+1 != undefined  = true
    // the if statement will always execute on the last element (undefined)
    
    //  currNum is at array[index - 1]
    // in order to get the last number inside currNum, you have to do index + 1
    //[lastNum (curr)], undefined (rightNum)
    

    for (let rightIndex = 1; rightIndex <= array.length; rightIndex++) {
        
        let startOfRange = array[leftIndex]        
        let currNum = array[rightIndex - 1]
        let endOfRange = currNum

        let rightNum = array[rightIndex]
        
        startOfRange
        currNum
        rightNum


        // rightNum and currNum converge on the last loop
        // this if statement will (maybe) always execute on the last loop
        // at least its [7, undefined] for the first one
        
        
        // the last number will always either be the end of a range 
        // or it will be its own range
        
        currNum + 1
        rightNum
        
        if ((currNum + 1) != rightNum) {

            currNum
            rightNum
            
            // let endOfRange = currNum
            
            // if (array[leftIndex ] != array[rightIndex - 1])
            
            if (startOfRange != endOfRange) { 
                let inclusiveRange=  startOfRange+"->" + endOfRange
                rangeArray.push(inclusiveRange)
            }
            
            // 7 == 7, its just one number (7)
            
            else if (startOfRange == endOfRange) {
                rangeArray.push(currNum.toString())
                rangeArray
            }
            
            // store the rightIndex of `rightNum` in leftIndex
            // only do this when the non-nested if statement executes
            
            rangeArray
            
            leftIndex = rightIndex            
        }
    }
    
    return rangeArray
}


console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"], "break at 3 and at 6, total of 3 ranges. 7 is left alone at the end")


// console.log(summaryRanges([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"])