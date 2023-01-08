/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the number isn't really important. Learning from the question you've solved is more important.
* 
*/




var canJump = function (array) {
    let index = 0
    let maxJump = 0

    let lastIndex = array.length - 1
    lastIndex

    while (index < array.length) {

        let num = array[index]

        index
        index + array[index]

        let jump = index + num

        maxJump = Math.max(maxJump, jump)
        maxJump

        if (maxJump >= lastIndex) {
            return true
        }

        // got a 0 and it didnt make it to the end
        
        if (maxJump <= index && num == 0) {
            return false
        }
        index++
    }


    // return false


}