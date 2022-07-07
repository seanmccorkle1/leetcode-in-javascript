/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(array) {

        let index=0
    let backIndex=array.length-1

    while( index <= backIndex){
        [array[index],array[backIndex]] = [array[backIndex],array[index]]

        index++
        backIndex--
    }
    return array
}
