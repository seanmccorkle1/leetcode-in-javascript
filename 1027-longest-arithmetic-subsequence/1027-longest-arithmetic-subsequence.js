var longestArithSeqLength = function (array) {

    if (array == undefined || !array.length) {
        return 0
    }

    let mapArray = new Array(array.length).fill(0).map(() => new Map())
    let maxArithSubsequenceLength = 1

    // if prev element has an ongoing arithmetic sequence with the same common difference
    // we simply add 1 to the length of that ongoing sequence, hence diffMap[j].get(diff) + 1
    // else, we start a new arithmetic sequence, initial length is 2

    let length;

    for (let index = 0; index < array.length; index++) {

        mapArray

        let nestedIndex = 0

        while (nestedIndex < index) {

            let rightNum = array[index]
            let leftNum = array[nestedIndex]

            // console.log([rightNum, leftNum])

            const currDifference = rightNum - leftNum

            index
            nestedIndex

            // mapArray[nestedIndex].get(currDifference)
            
            const submap = mapArray[index]

            length = (mapArray[nestedIndex].get(currDifference) + 1) || 2
            submap.set(currDifference, length)
            
            maxArithSubsequenceLength = Math.max(submap.get(currDifference), maxArithSubsequenceLength)
            ++nestedIndex
        }
    }
    
    mapArray
    return maxArithSubsequenceLength
}

console.log(longestArithSeqLength([9, 4, 7, 2, 10]), 3, "[4, 7, 10] is the longest")