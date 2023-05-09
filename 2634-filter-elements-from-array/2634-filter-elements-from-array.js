var filter = function(array, inputtedFn) {
    
    const filteredArray = []
    
    for (let index = 0; index < array.length; index++){
        
        const currNum = array[index]
        
        const filterFunctionBoolean = inputtedFn(currNum, index)
        
        if (filterFunctionBoolean != false){ 
            filteredArray.push(currNum)
        }
   }
    
    return filteredArray
}

filter([0,8,20,30], greaterThan10 = (num) => {return num > 10 ? true : false})