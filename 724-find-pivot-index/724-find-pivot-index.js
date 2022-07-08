/*
 * 
 * 
 * 
 *   
 */


 var pivotIndex= function(array) {
    const sumFn = array=> array.reduce((sum,curr)=>sum+curr,0)

    for (let index=0; index<array.length; index++){
        if (sumFn(array.slice(index + 1)) === sumFn(array.slice(0, index))){
            return index
        }
    }
    return -1
}