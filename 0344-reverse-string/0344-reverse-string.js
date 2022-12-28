
var reverseString = function (array) {

    let index = 0
    let backIndex = array.length - 1

    // no point in reversing on the same index,
    // it wont do anything

    while (index < backIndex) {

        index
        backIndex


        array

        let frontLetter = array[index]
        let backLetter = array[backIndex]


        array[index] = backLetter
        array[backIndex] = frontLetter

        

        index++
        backIndex--
    }


    // array
}

// reverseString(["h", "e", "l", "l", "o"])
// reverseString(["one", "two", "three", "four", "five"])