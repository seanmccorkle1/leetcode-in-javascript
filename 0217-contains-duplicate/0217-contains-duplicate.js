/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(array) {
    
    const set = new Set(array)
    if (set.size < array.length){
        return true
    }
else    return false
   
}