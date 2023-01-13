var rob = function(inputArray) {

    // [1, 1] no adjacent houses can be robbed, max is 1
    if (inputArray.length == 1) {  
        return inputArray[0]
    }
    
    // start [2,1,1,2] off as [2, 2]    
    // you have to skipMoney (inputArray[0]) or robMoney (take the current element) here
    
        // array[index] (each element) is the max amount of money you can rob without alerting the police at house #`index`
    // modify the array to keep the sum running
    
    const array = new Array(inputArray.length)
    
    array[0] = inputArray[0]

    // start as if you took the max of the 2 houses
    array[1] = Math.max(inputArray[0], inputArray[1])    


    array
    
    for (let index = 2; index < inputArray.length; index++) {
        
        index
        
        let currHouse = inputArray[index]
        
        // rob by adding the currHouse (robbing the current house)
        let robMoney = array[index - 2] + currHouse
        
        // skip by ignoring currHouse (ignoring the house)
        let skipMoney = array[index - 1]
        
        robMoney
        skipMoney
        
        const maxMoney =
            Math.max(
                robMoney, 
                skipMoney)

        array[index] = maxMoney
        array

        // array = [2, 1, 3, 3]

    }    

    array
    // return array.at(-1) 
    return Math.max(...array)
}

console.log(rob([2, 1, 1, 2]), 4)

// console.log(rob([2, 7, 9, 3, 1]), 12, "2 + 9 + 1 = 12, move up 2 each time")
// console.log(rob([2,1,1,2]), 4)