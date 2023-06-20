var largestAltitude =function(gain) {    
    
    let previous = 0
    let biggest = 0
    
    for (let index = 0; index < gain.length; index++) {
        
        let currGain = gain[index]
        previous += currGain
        
        if (previous > biggest) {
            biggest = previous
        }
    }
    
    return biggest
}

