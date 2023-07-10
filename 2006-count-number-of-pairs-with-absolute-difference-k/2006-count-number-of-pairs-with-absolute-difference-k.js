var countKDifference = function (array, k) {

    const obj = {}

    for (let num of array) {
        obj[num] ? obj[num]++ : obj[num] = 1
    }

    let pairCount = 0

    obj

    // single loop
    for (let index = 0; index < array.length; index++) {

        const num = array[index]

        let difference = num - k
        // if there are three 2s in the array, go up by three

        const differenceExists = obj[difference] ? true:  false
        let frequencyOfDifference = obj[difference]
        
        // if (differenceExists) {
            pairCount += frequencyOfDifference??0
        // }
    }

    return pairCount
}

countKDifference([9,3,1,1,4,5,4,9,5,10],1 )  // 8

// 3-1 = 2
// 5-3 = 2
// 4-2 = 2

// console.log(countKDifference([3, 2, 1, 5, 4], 2), 3)