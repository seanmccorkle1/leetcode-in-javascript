


var topKFrequent = function (array, kMostFrequent) {
    const frequencyMap = new Map()

    const doubleArray = []
    const returnArray = []

    for (const number of array) {
        frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1) // frequency + 1
    }

    // the frequency IS the index        
    // add the number as an [array] to make elements with the same frequency pushable


    for (let [number, frequency] of frequencyMap) {
        if (doubleArray[frequency] == undefined){
            doubleArray[frequency] = [number]             
        }
        else {
            doubleArray[frequency].push(number)
        }

    }

    // Higher frequency means a higher index, start from the back to get the most frequent
    // no element can have a frequency of 0, so it cant go to doubleArray[0]

    doubleArray

    for (let backIndex = doubleArray.length - 1; backIndex >= 0; backIndex--) {

        const subarray = doubleArray[backIndex]

        if (subarray != undefined) {
            returnArray.push(...subarray)
            kMostFrequent -= subarray.length
        }

        kMostFrequent

        if (kMostFrequent === 0){
            return returnArray
        }

        // if (returnArray.length == kMostFrequent) {
        //     return returnArray
        // }
    }
    // return returnArray
}
// console.log(topKFrequent([5,3,1,1,1,3,73,1], 2))

// console.log(topKFrequent([1, 2, 6, 6, 6, 6, 7, 7, 7, 8, 8], 2), [6, 7])
// console.log(topKFrequent([8, 8, 8, 8], 1),  [8])