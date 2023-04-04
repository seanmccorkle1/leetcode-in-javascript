var partitionString = function (string) {

    let leftIndex = 0
    let rightIndex = 1
    
    const partitions = []
    let numOfPartitions = 0

    string.slice(leftIndex, rightIndex)

    while (rightIndex < string.length) {

        const currLetter = string[rightIndex]
        let stringPartition = string.slice(leftIndex, rightIndex)

        leftIndex
        rightIndex

        if (stringPartition.includes(currLetter)) {
            partitions.push(stringPartition)

            numOfPartitions++
            leftIndex = rightIndex
        }
        rightIndex++
    }

    if (string.substring(leftIndex, rightIndex).includes(string[rightIndex - 1] + "")) {
        numOfPartitions++

        let stringPartition = string.slice(leftIndex, rightIndex)
        partitions.push()
    }
    partitions

    return numOfPartitions
}

console.log(partitionString("newstring"), 2, "['newstri', 'ng']")
// console.log(partitionString("sss"), 3, "[s,s,s]")