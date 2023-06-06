var findFinalValue = function(array, originalNum) {
    array.sort((a,b)=>a-b)
    
    let backIndex = array.length - 1
    
    let currNum = originalNum
    
    while (array.includes(currNum)){
        array.splice(array.indexOf(currNum), 1)
        currNum *= 2
    }
        
    return currNum
    
    if (!array.includes(originalNum)){
        return originalNum
    }
    while (backIndex >= 0){
        const num = array[backIndex]
        if (num % originalNum == 0){
            return num * 2
        }
        backIndex--
    }
    return originalNum
}
