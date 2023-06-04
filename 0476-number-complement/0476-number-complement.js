var findComplement = function(num) {

    let numAsBitstring= num.toString(2)

    let complementBitstring = numAsBitstring.replace(/[^]/g, digit=> digit == "1" ? "0" : "1")
    return parseInt(complementBitstring, 2)
    
}

console.log(findComplement(5), 2, "010 (complement) is 2")