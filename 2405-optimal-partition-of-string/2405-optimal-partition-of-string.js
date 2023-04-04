var partitionString = function (string) {

    let leftIndex = 0

    // 0 or 1 doesnt matter    
    let rightIndex = 1

    let numOfPartitions = 0
    const partitions = []


    while (rightIndex <= string.length) {

        // starts at string[1]
        const currLetter = string[rightIndex]

        string[8]
        let stringPartition = string.slice(leftIndex, rightIndex)

        currLetter
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

    // always +1 partition for the end of a word
    return ++numOfPartitions
}

console.log(partitionString("newstring"), 2, "['newstri', 'ng']")
console.log(partitionString("newstrinn"), 3, "['newstri', 'n', 'n']")

console.log(partitionString("sss"), 3, "[s,s,s]")