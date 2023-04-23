var map = function(array, mapFn) {

    const mappedArray = new Array(array.length)
    
    for (let index = 0; index < array.length; index++) {    
        
        const mappedNum = mapFn(array[index], index)
        mappedArray[index] = mappedNum
  }    
    return mappedArray
}

const mapFunction  = (num, index)=> {return num + index}
console.log(map([1,2,3], mapFunction),   [1,3,5])