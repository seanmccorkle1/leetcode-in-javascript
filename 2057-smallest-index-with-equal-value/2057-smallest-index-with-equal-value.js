/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(array) {
    

    for (let index=0;index<array.length; index += 1){
        if (index%10===array[index]){
            return index
        }
    }
 
    return -1
}