var compress = function (array) {

    // "a" automatically counts as length 1    
    let count = 1
    
    let deleteCount // not global variable, its function-scoped
    let digitArray
    let startIndex

    // array[index+1] over -1

    for (let backIndex = array.length - 2; backIndex >= 0; backIndex -= 1){

        const leftNum = array[backIndex]
        const rightNum = array[backIndex + 1]
        
        if (leftNum == rightNum){
            count += 1
        }
        
        
        else if (leftNum != rightNum){
            
            if (count>=2){
                deleteCount = count - 1
                digitArray = count.toString().split("") // split to get the digits ["1", "2"] instead of ["12"]
                startIndex = backIndex +2
                
                array.splice(startIndex, deleteCount, ...digitArray)  // modify with splice

                count =1
            }
        
    }
  
    }

    // if it repeats on the last loop
    
    if (count >= 2){
    
        deleteCount = count - 1
        digitArray = count.toString().split("") // split to get the digits ["1", "2"] instead of ["12"]

        // start at index 1 and delete to the right
        // backIndex isnt valid outside the loop
                

        array.splice(1, deleteCount, ...digitArray)
        
    }

    return array.length
}

console.log(compress(["a", "a", "b","b","b","b","b","b","b","b","b","b","b","b", "z"]),   6,
`array should be modified to ['a', '2', 'b', '1', '2', 'z']  b12 becomes b 1 2`)

// console.log(compress(["a"]), 1 ,"return array.length")