var plusOne = function(array) {
    
    // start from ones place again
    for (let index=array.length-1; index >= 0; index--){
        if (array[index] ===9){
            array[index] = 0
        }
        else if (array[index] !== 9){
            array[index] +=1
            return array
        }
    }
    return [1,...array]
}
