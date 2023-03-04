// Next capital one questions:

// * Coin Change	35.5%	Medium	1.08	https://leetcode.com/problems/coin-change
// * Add Two Numbers	33.9%	Medium	1.25	https://leetcode.com/problems/add-two-numbers
// * Greatest Common Divisor of Strings	52.9%	Easy	0.12	https://leetcode.com/problems/greatest-common-divisor-of-strings


var canJump = function (array) {

    let maxJump = 0
    let lastIndex = array.length - 1

    let index = 0

    lastIndex
    array

    while (index < array.length) {

        index
        const currNum = array[index]

        let currJump = index + currNum

        maxJump
        currJump

        maxJump = Math.max(currJump, maxJump)
        maxJump

        if (maxJump >= lastIndex) {
            return true
        }

        // got a 0 and it didnt make it to the end

        currNum

        maxJump
        index
        
        // keep looping until index gets to where the max jump lands
        // if index catches up to maxJump 

        // if (index >= maxJump && currNum == 0) {
        if (index >= maxJump) {
            return false
        }

        index += 1
    }

    return false
}


// console.log(canJump([2, 3, 1, 1, 4]), true, "1 step to 3 and end at the last element")
// console.log(canJump([2,3,1,0,4]), true)

// console.log(canJump([3, 0, 0, 0]), true, "true, you can get to the last element")

console.log(canJump([3, 0, 0, 0, 0]), false)
// console.log(canJump([4, 0, 0, 0, 0]), true)

// console.log(canJump([3,2,1,0,4]), false, "either 3 or 2 and 1 will get you to 0, where you cant jump")