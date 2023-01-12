/**
 * 
 * @function
 * @return
 * 
 */


var checkArithmeticSubarrays = (inputArray, leftSubarray, rightSubarray) => {


    var checkArithmeticSlice = array => {

        const difference = array[1] - array[0]

        // now start from array[2] - array[1]

        for (let index = 2; index < array.length; index++) {
            if ((array[index] - array[index - 1]) != difference) {
                return false
            }
        }

        // all differences are valid
        return true
    }
    
    leftSubarray

    const booleanArray = rightSubarray.map((e, index) => {

        const ascArraySlice = inputArray.slice(leftSubarray[index], rightSubarray[index] + 1).sort((a, b) => a - b)
        ascArraySlice

        return checkArithmeticSlice(ascArraySlice)

    })

    return booleanArray
}

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]),    [true, false, true])