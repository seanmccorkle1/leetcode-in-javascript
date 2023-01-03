/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */


var answerQueries = function(inputArray, limitNums) {

    inputArray.sort((a,b)=>a - b)
    const numCounts = []

    let sum = 0
    let numCount = 0

    for (const limitNum of limitNums){
        
        sum = 0
        numCount = 0

        for (let num of inputArray) {
            
            const sumFitsInLimit = (sum + num) <= limitNum
            
            if (sumFitsInLimit) {
                sum += num
                numCount++   // add the number to the count
            }
            
            // only 1 numCount should be pushed per limitNum
            // break to go straight to the next limitNum

            else if (!sumFitsInLimit){
                // numCounts.push(numCount)
                break 
            }
        }
        sum
        numCount

        numCounts.push(numCount)
    }

    numCounts
    limitNums

    // there should be one count in the array per limitNum

    if (numCounts.length != limitNums.length){
        numCounts.push(numCount)
    }
        
    return numCounts
}


console.log(answerQueries([4,5,2,1], [3,10,21]),    [2, 3, 4])