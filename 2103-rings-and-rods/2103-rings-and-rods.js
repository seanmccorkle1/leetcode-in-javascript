var countPoints = function(rings) {
    
    let count = 0
    
    // looping over the variable, rods

    for (let index=0; index<= 9; index++) {
        
            const ringWithAllColorsFound = rings.includes(`R${index}`) && 
          rings.includes(`G${index}`) && rings.includes(`B${index}`)
        
        if (ringWithAllColorsFound) {
            count+=1
        }
    }
    return count
}

