var findSpecialInteger = function (array) {

    const quarter = ~~(array.length / 4)
    if (array.length == 1){
        return array[0]
    }
    if (array.length <= 3){
        return array[1]
    }
    
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

// [1, 1] [2, 2] [3, 3] [3, 3]
// only 3 spans two quartiles

// findSpecialInteger([1, 1, 2, 2, 3, 3, 3, 3]) // 3

// findSpecialInteger([1,2,3,3]) // 3
// findSpecialInteger([1,2,2,3]) // 2
// findSpecialInteger([1,1,2,3]) // 1

findSpecialInteger([1,2,2]) // 2
findSpecialInteger([1,1,2]) // 1

// findSpecialInteger([15]) // 15

// findSpecialInteger([1,2,3,4,5,6,7,8,9,10,11,12,12,12,12]) // 12

// findSpecialInteger([1,2,2,6,6,6,6,7,10]) // 6
findSpecialInteger([1, 1]) // 1