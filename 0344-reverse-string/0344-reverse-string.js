/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(array) {

        let index=0
        let backIndex= array.length - 1
        
        // no point in reversing on the same index,
        // it wont do anything
        
        while(index<backIndex){

            // index
            // backIndex
        
            // array
            [array[index],array[backIndex]] = [array[backIndex],array[index]]
            array
            
            index++
            backIndex--
    }
    
    
    return array
}
