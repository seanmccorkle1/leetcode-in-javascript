var map = function(array, mapFn) {
    
    const mappedArray = new Array(array.length).fill(0)
    
    for (let index = 0; index < array.length; index++) {
        
        // index just gets left out if "num" is the only argument
        
        const mappedNum = mapFn(array[index], index)

        mappedArray[index] = mappedNum
  }
    return mappedArray
}

const mapFunction = (num)=> {return num + 1}
console.log(map([1,2,3], mapFunction),  [1,3,5])

map([1,2,3], (num)=> {return num + 1})