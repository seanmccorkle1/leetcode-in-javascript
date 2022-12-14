var rob = function(inputArray) {
    
    if (inputArray.length===1){ 
        // || inputArray.length==2){
        return Math.max(...inputArray)
    }
    
        if (inputArray === null || inputArray.length === 0) {
        return 0
    }

    let array = new Array(inputArray.length)

    array[0] = inputArray[0]
    
    // start [2,1,1,2] off as [2, 2]    
    // you have to skip (inputArray[0]) or rob (take the current element) here

    array[1] = Math.max(inputArray[0], inputArray[1])
    
    
    /*
    If we choose to rob, we can't rob the next house
    If we choose to skip, we can rob the next house

    array[index] is the max amount of money we can rob without alerting the police at house `index`
    */

    // modify the array to keep the sum running
    array

    for (let index = 2; index < inputArray.length; index++) {

        index
        const currNum = inputArray[index]

        let rob = array[index - 2] + currNum
        let skip = array[index - 1]

        rob
        skip

        
        array[index] = Math.max(rob, skip)

        // 2 + 9 beats 7 + 3, so put 11 in ("rob" it)
        // "skip" [3] by just ignoring it and keeping 11
        
        inputArray
        array
    }

    
    array
    return array.at(-1) 
}

console.log(rob([2, 7, 9, 3, 1]), 12, "2, 9, 1 = 12")
console.log(rob([2,1,1,2]), 4)