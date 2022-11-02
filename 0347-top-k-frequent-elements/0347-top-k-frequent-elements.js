var topKFrequent = function (array, kMostFrequentNums) {
    const frequencyMap = new Map()

    const frequencyArray = []
    const returnArray = []
    
    for (const number of array) {
        frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1) // frequencyIndex + 1
    }

    frequencyMap
    frequencyMap.size


    // arrays can hold multiple elements with the same frequency, so use [number]
    for (let [number, frequency] of frequencyMap) {

        if (frequencyArray[frequency] == undefined){
            frequencyArray[frequency] = [number] // higher index == more frequent
        }

        else {
            frequencyArray[frequency].push(number)
        }

    }

    // no element can have a frequency of 0, so frequencyArray[0] is empty
    frequencyArray


    for (let backIndex = frequencyArray.length - 1; backIndex >= 0; backIndex--) {
        const subarray = frequencyArray[backIndex]

        if (subarray != undefined) {
            returnArray.push(...subarray)
            kMostFrequentNums -= subarray.length
        }

        if (kMostFrequentNums == 0){
            return returnArray
        }

        //   if (returnArray.length == kMostFrequentNums) {
        //     return returnArray
        // }
    }
    return returnArray
}

console.log(topKFrequent([7,7,7,11,11,11,15], 2), [7, 11], "two most frequent elements are 7 and 1")
// console.log(topKFrequent([7,7,7,11,11,11,15], 3), [7, 11], "k is in the range 1 to 3")