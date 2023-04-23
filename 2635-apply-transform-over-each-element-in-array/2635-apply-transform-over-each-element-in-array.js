/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(array, mapFn) {
    
    return array.map(mapFn)
}

// const newArray = map(arr, plusone)
const plusIndexFn = (num, index)=> {return num + index}

console.log(map([1,2,3], plusIndexFn),   [1,3,5])