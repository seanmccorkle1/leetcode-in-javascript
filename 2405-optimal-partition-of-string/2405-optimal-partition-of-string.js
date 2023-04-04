var partitionString = function (string) {

    let leftIndex = 0
    let rightIndex = 1

    let numOfPartitions = 0
    const partitions = []

    while (rightIndex < string.length) {

        const currLetter = string[rightIndex]

        let stringPartition = string.slice(leftIndex, rightIndex)
        stringPartition

        leftIndex
        rightIndex

        const letterIsInPartition = stringPartition.includes(currLetter)

        if (letterIsInPartition) {

            stringPartition
            currLetter

            partitions.push(stringPartition)

            numOfPartitions++
            leftIndex = rightIndex
        }

        rightIndex++
    }

    partitions.push(string.slice(leftIndex, rightIndex))    
    partitions

    return ++numOfPartitions
}

console.log(partitionString("newstring"), 2, "['newstri', 'ng']")
// console.log(partitionString("sss"), 3, "[s,s,s]")