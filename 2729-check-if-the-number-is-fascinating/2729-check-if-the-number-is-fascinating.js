var isFascinating = function(num) {
       
    let numTimes2 = num*2
    let numTimes3 =num*3

    let numAsString = String(num) + numTimes2 + numTimes3

    if (numAsString.split("").sort().join("") == "123456789") {
        return true
        }
        return false

}

isFascinating(192) // true