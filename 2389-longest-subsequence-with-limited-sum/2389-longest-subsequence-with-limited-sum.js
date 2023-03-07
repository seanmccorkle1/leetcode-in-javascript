

var answerQueries = function(inputArray, limitNums) {
    
    const numCounts = []
    const sumsReference = []

    inputArray.sort((a,b)=>a - b)
    
    for (const limitNum of limitNums){
        
        let sum = 0
        let numCount = 0

        for (let num of inputArray) {
            
            const sumFitsInLimit = (sum + num) <= limitNum
            
            if (sumFitsInLimit) {
                sum += num
                numCount++   // add the number to the count
            }
            
            // only 1 numCount should be pushed per limitNum
            // break to go straight to the next limitNum
            
            else if (!sumFitsInLimit){
                break 
            }
        }
        sum
        numCount
        
        sumsReference.push(sum)
        numCounts.push(numCount)
    }

    // there should be one count in the array per limitNum

sumsReference 

   
    return numCounts
}


console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]), [2, 3, 4], 
"2 + 1 is <= 3, 2 elements fit in, 3 nums fit in 10, all 4 numbers fit in 21.")