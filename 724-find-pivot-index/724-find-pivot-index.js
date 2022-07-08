/*
 * 
 * 
 * 
 *   
 */


 var pivotIndex= function(array) {
    const sumFn = array=> array.reduce((sum,curr)=>sum+curr,0)

    for (let index=0; index<array.length; index++){
        let array1=array.slice(index + 1)
        let array2= array.slice(0, index)

        if (sumFn(array1) === sumFn(array2)){
            return index
        }
    }
    return -1
}
