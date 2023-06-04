var findComplement = function(num) {

    let numAsBitstring= num.toString(2)

    let complementBitstring = numAsBitstring.replace(/[^]/g, digit=> digit == "1" ? "0" : "1")
    
    // the pattern is (binaryString, 2) not (binaryString, 10)
    // keep the arguments consistent
    
    return parseInt(complementBitstring, 2)
    
}

console.log(findComplement(5), 2, "010 (complement) is 2")