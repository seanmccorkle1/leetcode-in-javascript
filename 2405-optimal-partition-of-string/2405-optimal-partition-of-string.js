var partitionString = function (string) {

    let leftIndex = 0
    let rightIndex = 1

    let numOfUniquePartitions = 0

    while (rightIndex < string.length) {
        
        const currLetter = string[rightIndex]
        const currPartition = string.slice(leftIndex, rightIndex)
        
        
        if (currPartition.includes(currLetter)) {

            // start the new string at the duplicate letter
            leftIndex = rightIndex
        
            numOfUniquePartitions+=1
        }

        leftIndex
        rightIndex++
    }

    numOfUniquePartitions += 1
    return numOfUniquePartitions
}

console.log(partitionString("newstring"), 2, "['newstri', 'ng'] is the minimum number of unique partitions")
// console.log(partitionString("s"), 1, "lowest length is 1")