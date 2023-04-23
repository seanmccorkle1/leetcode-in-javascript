var partitionString = function (string) {
    
    // the 1 letter counts as a partition
    // lowest constraint
    //also a good habit to check for conditions    
   
    if (string.length == 1){
        return 1 
    }
    
    let leftIndex = 0
    let rightIndex = 1

    let numOfUniquePartitions = 0

    while (rightIndex < string.length) {
        
        const currLetter = string[rightIndex]
        const currUniquePartition = string.slice(leftIndex, rightIndex)
        
        if (currUniquePartition.includes(currLetter)) {            

            // start the new string at the duplicate letter
            leftIndex = rightIndex
            
            numOfUniquePartitions+=1
        }        
        leftIndex
        rightIndex++
    }
    
    numOfUniquePartitions++
    return numOfUniquePartitions
}

console.log(partitionString("newstring"), 2, "['newstri', 'ng'] is the minimum number of unique partitions")
// console.log(partitionString("s"), 1, "lowest length is 1")