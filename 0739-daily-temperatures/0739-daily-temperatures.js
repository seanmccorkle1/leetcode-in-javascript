// Next capital one questions:

// * Coin Change	35.5%	Medium	1.08	https://leetcode.com/problems/coin-change
// * Add Two Numbers	33.9%	Medium	1.25	https://leetcode.com/problems/add-two-numbers
// * Greatest Common Divisor of Strings	52.9%	Easy	0.12	https://leetcode.com/problems/greatest-common-divisor-of-strings


// Named default parameters:

// var multiplyTwo =  ({num1, num2 } = {}) =>  num1*num2
// console.log(multiplyTwo({ num1: 4, num2: 4}),  16)


var dailyTemperatures = function (temperatureArray) {

    // .fill(0) for the days where no temperature to the right is higher (at least the last day)    
    const daysToHigherTempArray = new Array(temperatureArray.length).fill(0)

    // let mostRecentIndex = 0

    // use a stack to store
    const indexStack = []


    for (let rightIndex = 0; rightIndex < temperatureArray.length; rightIndex++) {

        // temperatureArray =
        // [ 73, 74, 75, 71, 69, 72, 76, 73 ]

        indexStack

        let mostRecentIndex = indexStack.at(-1)

        rightIndex
        mostRecentIndex

        // hover
        console.log(`${mostRecentIndex}, ${rightIndex}`) 

        let leftTemp = temperatureArray[mostRecentIndex]
        let rightTemp = temperatureArray[rightIndex]

        // higher temperature found if (leftTemp < rightTemp)
        // only if its less than, not equal temps
        leftTemp
        rightTemp

        // change leftTemp and stack in this loop
        // add stack.length !=0 just incase

        indexStack


        while (leftTemp < rightTemp && indexStack.length != 0) {

            rightIndex

            leftTemp
            rightTemp


            // [2] is 75, the highest temperature that goes into daysArray last

            indexStack

            let leftIndex = indexStack.pop()

            indexStack

            leftIndex
            rightIndex

            const daysUntilHigherTemp = rightIndex - leftIndex

            daysToHigherTempArray[leftIndex] = daysUntilHigherTemp
            daysToHigherTempArray

            // change the variable (leftTemp) for the while loop
            // `stack` was modified with pop()

            indexStack
            mostRecentIndex = indexStack.at(-1)

            leftTemp = temperatureArray[mostRecentIndex]

            if (leftTemp == undefined){
                break
            }

            // keep rightTemp at 76
            rightTemp

        }
        indexStack

        indexStack.push(rightIndex)
        indexStack
    }

    //daysArray=
    // [ 1, 0, 0, 0, 0, 0, 0, 0 ]
    // [ 1, 1, 0, 0, 0, 0, 0, 0 ]
    // [ 1, 1, 0, 0, 1, 0, 0, 0 ]

    // now go DOWN the stack during the while loop to 71's original place
    // [ 1, 1, 0, 2, 1, 0, 0, 0 ]

    // [ 1, 1, 0, 2, 1, 1, 0, 0 ]
    // [ 1, 1, 4, 2, 1, 1, 0, 0 ]

    // these last two elements stay at 0 in `daysArray`
    indexStack

    return daysToHigherTempArray
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0], "[1 day, 1 day, 4 days]")