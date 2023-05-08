var map = function(array, mapFn) {

    const mappedArray = new Array(array.length)
    
    const arrayLength = mappedArray.length
    
    for (let index = 0; index < arrayLength; index++) {

        // index just gets left out if "num" is the only argument
        const mappedNum = mapFn(array[index], index)

        mappedArray[index] = mappedNum
  }
    return mappedArray
}

const mapFunction  = (num)=> {return num + 1}
console.log(map([1,2,3], mapFunction),   [1,3,5])