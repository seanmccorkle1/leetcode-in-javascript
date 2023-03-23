var canPlaceFlowers = function (array, targetCount) {
    
     let count = 0
     
    for (let index = 0; index < array.length; index++) {
        
        const numToTheRight = array[index + 1]
        const numToTheLeft = array[index - 1]

        if (array[index] == 0) {
            
            if (array[index - 1] === 0 && array[index + 1] === 0) {
                array[index] = 1
                    count++
            }
            
            if (index == 0 && numToTheRight == 0) {
                array[index] = 1
                count++
            }
            
            if (index == 0 && array.length == 1) {
                array[index] = 1
                count++
            }
        
            
//             if (index == 0) {
                
//                 const numToTheRight = array[index+1]

//                 // [0, 0] or 
                
//                 if (numToTheRight == 0 || index == array.length - 1) {
//                     array[index] = 1
//                     count++
//                 }
//             }
    
            
            if (index == array.length - 1) {
                
                if (array[index - 1] == 0) {
                    array[index] = 1
                    count++
                }
            }
        }

    }
    count
    targetCount
    
     if (count > targetCount || count == targetCount){
         return true
     }
     
     else if (count < targetCount) {return false}
}