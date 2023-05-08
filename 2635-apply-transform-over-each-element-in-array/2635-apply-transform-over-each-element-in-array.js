var map = function(array, mapFn) {
    
    const mappedArray = new Array(array.length).fill(0)
    
    for (let index = 0; index < array.length; index++) {
        
        let num = array[index]
        
        // index just gets left out if "num" is the only argument        
        let numAfterFunction = mapFn(num, index)
        
        mappedArray[index] = numAfterFunction
  }
    
    return mappedArray
}

console.log(map([1,2,3], (num, index)=> {return num + index}),  [1,3,5])