var findSpecialInteger = function (array) {

    if (array.length == 1){
        return array[0]
    }
    
    if (array.length <= 3){
        return array[1]
    }

    const quarter = Math.floor(array.length / 4)

    array.length
    array

    for (let index = 0; index < array.length; index++) {

        let currNum = array[index]
        let firstNumOfNextQuartile = array[index + quarter]


        // spans 2
        if (currNum == firstNumOfNextQuartile) {
            return currNum
        }

    }

}

findSpecialInteger([1, 1, 2, 2, 3, 3, 3, 3]) // 3

// findSpecialInteger([15]) // 15

// findSpecialInteger([1,2,2]) // 2
// findSpecialInteger([1,1,2]) // 1

// findSpecialInteger([1,2,3,4,5,6,7,8,9,10,11,12,12,12,12]) // 12