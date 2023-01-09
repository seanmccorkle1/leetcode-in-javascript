/**
 * 
 * @function
 * @return
 * 
 */


var rob = function(inputArray) {
    
    if (inputArray.length === 0) {
        return 0
    }

    // for robMoney([8])  array[1] = Math.max(8, inputArray[1]) returns NaN
    // Math.max and min always privilege NaN

    if (inputArray.length == 1){ 
        return Math.max(...inputArray)
    }

    const array = new Array(inputArray.length)
    

    array[0] = inputArray[0]

    // start [2,1,1,2] off as [2, 2]    
    // you have to skipMoney (inputArray[0]) or robMoney (take the current element) here

    array[1] = Math.max(inputArray[0], inputArray[1])
    array

    /*
    If we choose to robMoney, we can't robMoney the next house
    If we choose to skipMoney, we can robMoney the next house

    array[index] is the max amount of money we can robMoney without alerting the police at house `index`
    */
    
    // modify the array to keep the sum running
    array
    
    for (let index = 2; index < inputArray.length; index++) {

        index
        const currNum = inputArray[index]

        let robMoney = array[index - 2] + currNum
        let skipMoney = array[index - 1]

        robMoney
        skipMoney

        const maxMoney =
            Math.max(
                robMoney, 
                skipMoney)

        array[index] = maxMoney

        // 2 + 9 beats 7 + 3, so put 11 in ("robMoney" it)
        // "skipMoney" [3] by just ignoring it and keeping 11
        
        inputArray
        array
    }
    
    array
    return array.at(-1) 
}

// console.log(rob([2, 7, 9, 3, 1]), 12, "2 + 9 + 1 = 12, move up 2 each time")
console.log(rob([7, 2, 9, 3, 1]), 12, "2 + 9 + 1 = 12, move up 2 each time")

// console.log(rob([2,1,1,2]), 4)