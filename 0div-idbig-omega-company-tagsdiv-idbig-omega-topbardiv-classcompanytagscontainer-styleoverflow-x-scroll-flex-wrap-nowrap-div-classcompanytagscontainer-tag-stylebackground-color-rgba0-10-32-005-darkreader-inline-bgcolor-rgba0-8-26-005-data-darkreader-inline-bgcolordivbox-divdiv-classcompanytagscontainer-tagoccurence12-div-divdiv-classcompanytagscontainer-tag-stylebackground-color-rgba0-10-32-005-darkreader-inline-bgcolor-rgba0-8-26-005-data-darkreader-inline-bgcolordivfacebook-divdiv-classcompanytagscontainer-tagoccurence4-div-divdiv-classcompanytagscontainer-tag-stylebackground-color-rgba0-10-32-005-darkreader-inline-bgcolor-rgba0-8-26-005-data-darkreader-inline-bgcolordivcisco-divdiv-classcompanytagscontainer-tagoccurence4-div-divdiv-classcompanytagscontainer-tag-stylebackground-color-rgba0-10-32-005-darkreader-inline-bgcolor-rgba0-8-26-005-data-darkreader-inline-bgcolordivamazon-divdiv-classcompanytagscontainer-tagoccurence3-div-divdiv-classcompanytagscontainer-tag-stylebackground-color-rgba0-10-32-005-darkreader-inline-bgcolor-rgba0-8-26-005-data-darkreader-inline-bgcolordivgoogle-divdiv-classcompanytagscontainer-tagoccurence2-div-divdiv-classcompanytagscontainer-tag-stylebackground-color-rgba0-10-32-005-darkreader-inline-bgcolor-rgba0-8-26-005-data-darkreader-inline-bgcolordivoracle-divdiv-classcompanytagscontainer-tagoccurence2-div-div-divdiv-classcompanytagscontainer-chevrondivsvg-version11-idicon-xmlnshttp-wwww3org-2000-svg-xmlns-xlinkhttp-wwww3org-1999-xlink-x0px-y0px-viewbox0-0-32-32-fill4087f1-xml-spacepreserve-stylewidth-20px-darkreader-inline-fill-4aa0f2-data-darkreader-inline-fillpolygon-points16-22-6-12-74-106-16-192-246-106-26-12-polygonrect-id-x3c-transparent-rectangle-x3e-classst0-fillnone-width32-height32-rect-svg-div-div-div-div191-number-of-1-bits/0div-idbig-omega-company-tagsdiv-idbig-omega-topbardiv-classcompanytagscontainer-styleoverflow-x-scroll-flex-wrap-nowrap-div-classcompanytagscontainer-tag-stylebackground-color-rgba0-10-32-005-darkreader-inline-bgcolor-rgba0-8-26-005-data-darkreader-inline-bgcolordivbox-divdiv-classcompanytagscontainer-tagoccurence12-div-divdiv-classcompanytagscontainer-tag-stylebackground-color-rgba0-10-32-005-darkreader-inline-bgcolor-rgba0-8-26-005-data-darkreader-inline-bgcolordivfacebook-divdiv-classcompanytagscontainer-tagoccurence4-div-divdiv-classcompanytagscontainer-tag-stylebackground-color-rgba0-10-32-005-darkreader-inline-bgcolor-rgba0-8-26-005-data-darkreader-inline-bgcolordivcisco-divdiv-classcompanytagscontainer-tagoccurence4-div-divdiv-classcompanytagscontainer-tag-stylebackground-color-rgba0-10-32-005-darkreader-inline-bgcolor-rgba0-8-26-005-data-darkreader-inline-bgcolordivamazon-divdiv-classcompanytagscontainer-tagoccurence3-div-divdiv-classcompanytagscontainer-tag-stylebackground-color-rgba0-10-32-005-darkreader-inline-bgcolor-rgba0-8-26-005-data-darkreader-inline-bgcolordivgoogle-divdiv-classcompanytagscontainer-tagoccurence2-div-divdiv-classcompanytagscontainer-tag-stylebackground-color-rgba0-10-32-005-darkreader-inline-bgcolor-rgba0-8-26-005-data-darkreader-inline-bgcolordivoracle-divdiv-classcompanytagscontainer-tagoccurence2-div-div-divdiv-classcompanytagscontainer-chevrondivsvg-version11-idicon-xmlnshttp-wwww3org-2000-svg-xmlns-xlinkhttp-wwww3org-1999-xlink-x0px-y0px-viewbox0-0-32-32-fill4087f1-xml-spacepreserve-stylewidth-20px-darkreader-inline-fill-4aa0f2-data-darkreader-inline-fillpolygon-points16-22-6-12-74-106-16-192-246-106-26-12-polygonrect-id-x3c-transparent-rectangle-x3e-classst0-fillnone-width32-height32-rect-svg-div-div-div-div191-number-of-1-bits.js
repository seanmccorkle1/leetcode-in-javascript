var hammingWeight = function(binaryNum){
    let numOfOnes = 0

    while (binaryNum != 0){
        binaryNum
        const rightmostBit = binaryNum & 1
        numOfOnes += rightmostBit  // adds 1 or 0 (adds nothing)
        // unsigned integer, think of signed as normal so it only uses 2 arrows (>>)
        
        binaryNum = binaryNum >>> 1
    }
    return numOfOnes
}