var canJump = function (array) {

    let maxJump = 0
    let lastIndex = array.length - 1

    let index = 0

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

        // if index catches up to maxJump by looping through
        // and the element (num) at that current index is 0,
        // return false

        if (maxJump <= index && num == 0) {
            return false
        }

        index += 1
    }

}

// console.log(canJump([3, 0, 0, 0]), true, "true, you can getto the last element")
console.log(canJump([3, 0, 0, 0, 0]), false)