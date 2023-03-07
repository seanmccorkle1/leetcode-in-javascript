var answerQueries = function (inputArray, limitNums) {

    const numCounts = []

    inputArray.sort((a, b) => a - b)

    for (const limitNum of limitNums) {

        // reset 
        let sum = 0
        let numCount = 0


        for (const num of inputArray) {

            if ((sum + num) <= limitNum){
                sum += num
                numCount++
            }
            
            else {
                numCounts.push(numCount)
                break
            }

            if (numCount == inputArray.length){
                numCounts.push(numCount)
            }
        }

    }

    return numCounts
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]), [2, 3, 4], 
"2 + 1 is <= 3, 2 elements fit in, 3 nums fit in 10, all 4 numbers fit in 21.")