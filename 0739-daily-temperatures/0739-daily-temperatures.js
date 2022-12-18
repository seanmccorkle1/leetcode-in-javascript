/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many - depend on your schedule, but I think the number isnt really important. Learning from the question youve solved is indeed more essential.
* 
*/


var dailyTemperatures = function (array) {

    const returnArray = new Array(array.length).fill(0)
    const indexStack = []


    for (let right = 0; right < array.length; right += 1) {

        right
        indexStack

        let leftIndex = indexStack.at(-1)

        right
        leftIndex
        
        // [ 73, 74, 75, 71, 69, 72, 76, 73 ]
        
        let leftNum = array.at(leftIndex)
        let currNum = array[right]


        leftNum
        currNum

        indexStack

        // [ 73, 74, 75, 71, 69, 72, 76, 73 ]

        while (indexStack.length >= 1 && leftNum < currNum) {

            leftNum = array[leftIndex]
            currNum = array[right]

            leftNum
            currNum


            if (leftNum < currNum) {

                indexStack

                let left = indexStack.pop()

                right
                left

                const daysToGetHigherTemp = right - left
                daysToGetHigherTemp 

                // returnArray already has 8 elements, dont push anymore

                returnArray[left] = daysToGetHigherTemp

                returnArray

                indexStack
                leftIndex = indexStack.at(-1)

                // [ 1, 0, 0, 0, 0, 0, 0, 0 ] 
                // [ 1, 1, 0, 0, 0, 0, 0, 0 ] 
                // [ 1, 1, 0, 0, 1, 0, 0, 0 ] 

                // [ 1, 1, 0, 2, 1, 0, 0, 0 ] 
                // [ 1, 1, 0, 2, 1, 1, 0, 0 ] 
                // [ 1, 1, 4, 2, 1, 1, 0, 0 ]
            }
        }

        indexStack
        indexStack.push(right)
    
        indexStack
    }

    
    return returnArray
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0], "[1 day, 1 day, 4 days]")