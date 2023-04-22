

var filter = function(array, fn) {
    
    const filteredArray = []
    
    for (let index = 0; index < array.length; index++){
        
        const currNum = array[index]
       if (Boolean(fn(currNum, index))==true){ 
           filteredArray.push(currNum)
      }
   }
    
    return filteredArray
}

filter([0,8,20,30], greaterThan10 = num => num > 10)