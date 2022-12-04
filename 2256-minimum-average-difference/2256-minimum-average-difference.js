var minimumAverageDifference = function (array) {
    
    let leftSum = 0
    let rightSum = array.reduce((s,c)=> s + c, 0)

    let minFound = Infinity
    let minDiff = Infinity
    let indexOfMinDifference;

        // parantheses on (index+1) cause  theres / and +
    //Math floor so you dont get array decimal with the division

    for (let index = 0; index < array.length; index++) {       

        leftSum += array[index]
        rightSum -= array[index]
        
        // (array.length - index) means  
        // i=0 (6 - 0 = 6) 
        // i=1 (6 - 1 = 5) 
        // i = 2(6 - 2 = 4)
        // start at array high denominator and end at  x/1 

        index
        
        let rightSumDenominator = array.length - index - 1 

        if (rightSumDenominator === 0){
            rightSumDenominator = 1 // cant divide by 0
        }
        
        // start at (leftSum / 1) with  leftSum / (index + 1) 
        // with index=0, that way you still get array[0]
        let leftSumAvg= Math.floor(leftSum / (index + 1))
    
        let rightSumAvg = Math.floor(rightSum / rightSumDenominator) // start at (rightSum / 5)

        let difference = Math.abs(leftSumAvg - rightSumAvg)
        
        // `difference` is lower than minFound
        // that means its the new min
        
        if (difference< minFound) {  // difference < Infinity 
            minFound = difference // difference gets refreshed on every loop, minFound doesnt unless you do this
            indexOfMinDifference = index // store the index
            
            if (minFound===0){
                return index
            }
        }

        // kinda like best time to buy and sell stock
        // reassign variables and dont return until the end
    
    }
    return indexOfMinDifference
}

console.log(minimumAverageDifference([2,5,3,9,5,3]), 3)