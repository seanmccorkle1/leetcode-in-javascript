var search = function(array, targetNum) {

    let leftIndex = 0
    let rightIndex = array.length - 1

    while (leftIndex < rightIndex) {

        let distance = (rightIndex - leftIndex) + 1
        let mid = Math.floor(distance / 2) + leftIndex


        const midNum = array[mid]
        
        if (targetNum < midNum) {
            rightIndex = mid - 1
        } 
        
        // cover all conditions
        else if (targetNum >= midNum) {
            leftIndex = mid 
        }
        
    } // end of while loop
    
    
    if (array[leftIndex] == targetNum){
        return leftIndex
    }
    
    else return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9), 4)