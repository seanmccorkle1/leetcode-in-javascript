var dailyTemperatures = function(temperatureArray) {

    // .fill(0) for the days where no temperature to the right is higher (the last two days)
    // let daysArray = new Array(temperatureArray.length).fill(0)

    const daysArray = new Array(temperatureArray.length - 1).fill(0)
    var mostRecentIndex = 0
    
    // stack always starts as []
    // const stack is fine because you only use pop() on it

    const stack = []
    
    // you still need to get the last temperature to compare
    
    for (let rightIndex = 0; rightIndex < temperatureArray.length; rightIndex++) {

        rightIndex

        stack

        // temperatureArray = 
        // [ 73, 74, 75, 71, 69, 72, 76, 73 ]
        
        mostRecentIndex = stack.at(-1)
        
        let leftTemp = temperatureArray[mostRecentIndex]
        let rightTemp = temperatureArray[rightIndex]

        // higher temperature found if (leftTemp < rightTemp)
        // only if its less than, not equal temps

        // undefined < 73 - FALSE - store index 0 (73) into the stack
        // and ignore the while loop

        // 73 < 74 - TRUE
        // 74 < 75 - TRUE
        // 75 < 71 - FALSE
        // 71 < 69 - FALSE
        // 69 < 72 - TRUE
        // 72 < 76 - TRUE
        // 76 < 73 - FALSE
        
        // undefined returns false anyway for any kind of comparison
        // you dont need  (while (stack.length >= 1))

        // while the stack has unfinished temperatures  (stack.length >= 1)

        // temperatureArray = [ 73, 74, 75, 71, 69, 72, 76, 73 ]
        
        leftTemp
        rightTemp    


        while (leftTemp < rightTemp && stack.length >= 1) {

            leftTemp
            rightTemp
            
            // [2] is 75, the highest temperature that goes into daysArray last

            stack
            let leftIndex = stack.pop()
            stack

            leftIndex
            rightIndex
            
            // (1 - 0) is just one day to the right, dont need -1
            const daysUntilHigherTemp = rightIndex - leftIndex 
            
            
            leftIndex
            daysArray[leftIndex] = daysUntilHigherTemp

            daysArray


            // change the variable (leftTemp) for the while loop
            // `stack` was modified  with pop()

            mostRecentIndex = stack.at(-1)
            leftTemp = temperatureArray[mostRecentIndex]

            // keep rightTemp at 76 
            rightTemp 

        }

        stack

        stack.push(rightIndex)
        stack

        daysArray
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
    stack
    daysArray.push(0)
    return daysArray
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0], 
"[1 day, 1 day, 4 days]")