


var topKFrequent = function (array, kMostFrequent) {
    const frequencyMap = new Map()

    // array of sets
    const setArray = []
    const mostFrequentArray = []

    for (const number of array) {
        frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1) // frequency + 1
    }


    for (let [number, frequency] of frequencyMap) {
        // the frequency is the index
        
        if (setArray[frequency] == undefined){
            setArray[frequency] = [number]
        }
        else setArray[frequency].push(number)

        // setArray[frequency] = (setArray[frequency] || new Set()).add(number)
    }

    // Higher frequency means a higher index, start from the back to get the most frequent
    // no element has a frequency of 0, so it cant go to setArray[0]

    setArray

    for (let backIndex = setArray.length - 1; backIndex >= 0; backIndex--) {

        const setElement = setArray[backIndex]

        if (setElement != undefined) {
            mostFrequentArray.push(...setElement)
            // mostFrequentArray.push(...setElement)
        }

        if (mostFrequentArray.length == kMostFrequent) {
            return mostFrequentArray
        }
    }
    return mostFrequentArray
}