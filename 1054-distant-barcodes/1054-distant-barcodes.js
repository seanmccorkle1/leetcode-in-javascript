



var rearrangeBarcodes = function(inputArray) {
    const map = new Map()

    for (const element of inputArray) {
        map.set(element, (map.get(element) || 0) + 1)
    }


    const array = Array.from(map.keys()).sort(((a, b) => map.get(b) - map.get(a)))
    const uniqueNum = inputArray.length

    let index = 0 
    const resultArray = []


    for (const element of array) {
        let count = map.get(element)

        while (count > 0) {
            resultArray[index] = element
            index += 2

            if (index >= uniqueNum) {
                index = 1
            }

            count -= 1
        }
    }
    
    return resultArray
}

console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]), [2, 1, 2, 1, 2, 1])
// rearrangeBarcodes([1 ,12, 0, -12])