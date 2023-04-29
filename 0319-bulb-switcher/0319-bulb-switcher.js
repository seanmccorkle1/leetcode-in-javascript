var bulbSwitch = function(num) {    
    
    // you only get an on-light (odd number of factors) on the powers
    
    let sqrt =Math.pow(num, 0.5)
    return Math.floor(sqrt)
}

console.log(bulbSwitch(4), 2, "bulb 1 and 4 are on")

// console.log(bulbSwitch(1), 1, "1st lightbulb is always on")
// console.log(bulbSwitch(8), 2, "bulbs 1 and 4 still")
// console.log(bulbSwitch(9), 3, "bulbs [1, 4, 9] are on ")