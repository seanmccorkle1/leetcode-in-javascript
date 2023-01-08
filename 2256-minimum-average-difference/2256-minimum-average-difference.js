
var minimumAverageDifference = function (array) {

    let leftSum = 0    
   let rightSum = array.reduce((s, c) => s + c, 0)
   
   let min = Infinity
   let indexOfMinDifference = 0
   
   // parantheses on (index+1) cause theres / and +
   //Math floor so you dont get array decimal with the division

   leftSum
   rightSum

   // (array.length - index - 1) means it progressively goes down

   // i=0 (6 - 0 - 1 = 5)
   // i=1 (6 - 1 - 1 = 4)
   // i = 2(6 - 2 -1 = 3)

   // start at array high denominator and end at x/1
   
   for (let index = 0; index < array.length; index += 1) {

       let num = array[index]

       leftSum
       rightSum
   
       // leftSum starts at 2
       // rightSum leavs out  the 2 by doing (rightSum -= 2)
       
       leftSum += num
       rightSum -= num
       
       // start at (x / 1)
       let leftSumDenominator = index + 1
       let rightSumDenominator = (array.length - index - 1) || 1

       // if (rightSumDenominator === 0) {
       //     rightSumDenominator = 1 
       // }

       // start at (leftSum / 1) with leftSum / (index + 1)
       // with index=0, that way you still get array[0]

       let leftSumAvg = Math.trunc(leftSum / leftSumDenominator)
       
       // start at (rightSum / 5) 
       let rightSumAvg = Math.trunc(rightSum / rightSumDenominator)

       let difference = Math.abs(leftSumAvg - rightSumAvg)

       // `difference` is lower than min
       // that means its the new min
       // `difference` gets refreshed on every loop, 
       // min doesnt unless you assign it

       
       if (difference < min) { 

           min = difference 
           indexOfMinDifference = index // store the min index here

           // leftSum is 4 and rightSum is 4, (4-4) 

           // leftSum =>(2+5+3+9 / 4) => 19/4 
           // floor(19/4 )= 4

           // rightSum is (5+3+4 / 3) => 12/3
           // 12/3 = 4
           
           if (min === 0) {
               return index // return current index
           }
       }

       // kinda like best time to buy and sell stock
       // reassign variables and dont return until the end

   }

   return indexOfMinDifference
}

console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3, 4]),   3)
// console.log(minimumAverageDifference([12]), 0, "the only possible index is 0")