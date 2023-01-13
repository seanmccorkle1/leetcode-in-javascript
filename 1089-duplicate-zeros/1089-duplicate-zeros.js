/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the num isn't really important. Learning from the question you've solved is more important.
* 
*/

var duplicateZeros = function (inputArray) {
        
    for (let index = 0; index < inputArray.length; index++) {

        let num = inputArray[index]

        if (num == 0) {
            inputArray.splice(index, 0, 0)
            index++
            inputArray.pop()
        }

    }
    inputArray
    // return inputArray
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]), [1, 0, 0, 2, 3, 0, 0, 4])