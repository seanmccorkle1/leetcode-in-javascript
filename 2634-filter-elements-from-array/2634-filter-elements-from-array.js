var filter = function(array, passedFn) {
    
    const filteredArray = []
    
    for (let index = 0; index < array.length; index++){
        
        const num = array[index]
        
        const returnValue = passedFn(num, index)
        
        // the filter callbacks literally return false
        // dont push those numbers
        
        const valueIsTruthy = Boolean(returnValue) === true
        
        if (valueIsTruthy) { 
            filteredArray.push(num)
        }
   }
    
    return filteredArray
}

filter([0,8,20,30], greaterThan10 = (num) => {return num > 10 ? true : false})