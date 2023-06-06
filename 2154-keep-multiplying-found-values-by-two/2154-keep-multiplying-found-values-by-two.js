var findFinalValue = function(array, originalNum) {
    // array.sort((a,b)=>a-b)    
    let currNum = originalNum
    
    while (array.includes(currNum)){
        array.splice(array.indexOf(currNum), 1)
        currNum *= 2
    }
    
    return currNum
}
