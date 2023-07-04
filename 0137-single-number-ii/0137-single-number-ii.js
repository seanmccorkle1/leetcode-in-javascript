var singleNumber = function (array) {
    
    if (array.length == 1){
        return array[0]
    }
    
    array.sort((a, b) => a - b)
    let threeIndex = 0
    
    while (threeIndex < array.length){
        
        const leftNum = array[threeIndex]
        const rightNum = array[threeIndex + 1]
        
        if (leftNum != rightNum){
            return leftNum
        }
        
        threeIndex += 3
    }    
    return threeIndex
}

console.log(singleNumber([0,1,0,1,0,1,99]), 99)