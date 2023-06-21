
var minBitFlips = function(startNum, goalNum) {

    let bitstring= (startNum ^ goalNum).toString(2)
    
    let numOfDifferentBits =  bitstring.replace(/0/g, "").length
    return numOfDifferentBits
}

// minBitFlips(7, 10)
minBitFlips(10, 7)