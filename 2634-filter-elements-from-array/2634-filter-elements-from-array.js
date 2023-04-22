

var filter = function(array, fn) {
    
    const newArray = []

    for (let index = 0; index < array.length; index++){
        
       if (fn(array[index], index)){
           newArray.push(array[index])
      }
   }
    
    return newArray
}

filter([0,10,20,30], greaterThan10 = num => num > 10)