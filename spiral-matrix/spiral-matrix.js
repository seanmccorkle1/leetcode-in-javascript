/**
 *
 * Don't make any small flashcards unless it's very common. 
 * 
 * 
 */



var spiralOrder = function(matrix) {
    const array = []

    while(matrix.length){
        const firstArray = matrix.shift()        
        array.push(...firstArray) // array.push(...[1,2]) to keep it a single array 
        

        for(const subarray of matrix){    

            // pop modifies the subarrays
            let pop = subarray.pop()

            if (pop !== undefined){
                array.push(pop)
            }

            subarray.reverse()   
    }
    
        matrix.reverse()
  }
  return array
}
 
// push [8,7] to the top to get it firstArray on the next iteration
 
// [8,7]
// [5,4]

console.log(spiralOrder([
    [1,2,3],
    [4,5,6],
    [7,8,9]]), [1,2,3,6,9,8,7,4,5])

