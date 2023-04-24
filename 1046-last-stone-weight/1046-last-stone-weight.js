var lastStoneWeight = function (array) {    
    
    while (array.length != 1) {
        
        let highest = Math.max(...array)
        array.splice(array.indexOf(highest), 1)
        
        let secondHighest = Math.max(...array)
        array.splice(array.indexOf(secondHighest), 1)
        
        const difference =(highest-secondHighest)
        array.push(difference)
    }
    return Number(array.join(""))
    return array[0]
}

console.log(lastStoneWeight([7, 5, 20]),  8,  "smash [20,5,7] into [13,5], smash into [8]")
