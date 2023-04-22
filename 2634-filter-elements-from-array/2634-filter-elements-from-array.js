

var filter = function(array, fn) {
    
    const newArray = []

    for (let index = 0; index < array.length; index++){
        
        const num=array[index]
       if (Boolean(fn(num, index))==true){ 
           newArray.push(num)
      }
   }
    
    return newArray
}

filter([0,8,20,30], greaterThan10 = num => num > 10)