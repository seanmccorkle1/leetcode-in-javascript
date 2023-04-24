var lastStoneWeight = function (array) {
    
    
    while (array.length != 1) {
        
        let max1 = Math.max(...array)
        array.splice(array.indexOf(max1), 1)
        
        let max2 = Math.max(...array)
        array.splice(array.indexOf(max2), 1)
        
        const difference = Math.abs(max2 - max1)
        
        difference
        array
        
        array.push(difference)
    }
    
    array
    return array[0]
}

console.log(lastStoneWeight([7, 5, 20]),  8,  "smash [20,5,7] into [13,5], smash into [8]")
