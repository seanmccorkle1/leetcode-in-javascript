/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(array) {
    
    const returnArray=[]
    array.sort((a,b)=> a -b)

    // start from the back at the highest number,
    // unshift 2 to the start at the end

    while (array.length >= 1){
        returnArray.unshift(array.pop())
        returnArray.unshift(returnArray.pop())
    }
    let first = returnArray.shift()
    returnArray.push(first)
    return returnArray
    }

// console.log(xd([17, 13, 11, 2, 3, 5, 7]), [2, 13, 3, 11, 5, 17, 7])
// console.log(xd([1000, 1]), [1, 1000])