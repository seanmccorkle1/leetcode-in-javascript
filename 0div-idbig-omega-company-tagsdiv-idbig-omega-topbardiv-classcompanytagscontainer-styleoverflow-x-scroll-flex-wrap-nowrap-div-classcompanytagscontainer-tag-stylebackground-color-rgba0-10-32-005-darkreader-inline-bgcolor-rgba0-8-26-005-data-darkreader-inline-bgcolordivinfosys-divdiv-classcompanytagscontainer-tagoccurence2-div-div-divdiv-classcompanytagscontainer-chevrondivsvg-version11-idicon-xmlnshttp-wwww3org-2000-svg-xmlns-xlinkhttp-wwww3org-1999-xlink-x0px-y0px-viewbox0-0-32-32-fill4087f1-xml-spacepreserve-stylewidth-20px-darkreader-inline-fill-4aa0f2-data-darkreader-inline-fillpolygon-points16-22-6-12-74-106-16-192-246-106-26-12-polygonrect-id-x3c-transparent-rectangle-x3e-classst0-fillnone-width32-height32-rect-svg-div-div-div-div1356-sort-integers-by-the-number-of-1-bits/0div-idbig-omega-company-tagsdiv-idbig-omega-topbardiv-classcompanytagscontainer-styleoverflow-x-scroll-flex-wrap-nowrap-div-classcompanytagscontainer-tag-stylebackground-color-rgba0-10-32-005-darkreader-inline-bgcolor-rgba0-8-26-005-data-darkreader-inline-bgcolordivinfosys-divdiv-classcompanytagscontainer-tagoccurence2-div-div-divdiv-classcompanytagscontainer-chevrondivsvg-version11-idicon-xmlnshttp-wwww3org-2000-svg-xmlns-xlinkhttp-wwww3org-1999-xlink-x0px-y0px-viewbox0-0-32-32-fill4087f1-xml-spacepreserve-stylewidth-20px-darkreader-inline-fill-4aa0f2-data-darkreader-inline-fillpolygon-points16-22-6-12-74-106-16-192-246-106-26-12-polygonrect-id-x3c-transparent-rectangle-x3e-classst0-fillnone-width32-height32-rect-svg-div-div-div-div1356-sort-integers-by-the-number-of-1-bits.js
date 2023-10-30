var sortByBits = function(array) {
    return array.sort((a,b)=> giveOneBits(a) - giveOneBits(b) || a-b)
}
                      
const giveOneBits = (num)=> {
    const oneBits  = num.toString(2).match(/1/g) ?? []
    return oneBits.length    
}

sortByBits([0,1,2,3,4,5,6,7,8]) // [0,1,2,4,8,3,5,6,7]