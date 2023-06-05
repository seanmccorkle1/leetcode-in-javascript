var countPoints = function(rings) {

    let rods = '0123456789'
    let count = 0
    
    // looping over the variable, rods

    for (let rod of rods) {     
    
        const ringWithAllColorsFound = rings.includes(`R${rod}`) && 
          rings.includes(`G${rod}`) && rings.includes(`B${rod}`)
        
        if (ringWithAllColorsFound) {
            count+=1
        }         
    } 
    
    return count
}
