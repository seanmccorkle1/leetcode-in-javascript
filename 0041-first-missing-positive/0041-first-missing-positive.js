// First, we need to understand that the first missing positive number is less than or equal to n (length of array) except for one case. The explanation is in the above.

// We will position every positive integer in the array at its corresponding index
// ex) 1 at index 0, 2 at index 1, 3 at index 2

// In this way, the array can position all integers that are less than or equal to n at their corresponding indices without changing the size of given array.

// Therefore, we can find the first missing positive integer by scanning through the array.

// ------------------------------------------------------

// A bit late to this, but assume that your array looks something like [3, 1, 2, 4].

// The first iteration of the loop will swap 3 and 2:

// [2, 1, 3, 4]

// But you can't assume that the new value at the current index is in the correct spot. This is why we need to decrement i, so that on the next loop iteration, we are still on index 0. Now it repositions 2 by swapping with the 1:

// [1, 2, 3, 4]

// Note that i gets decremented again, so the next loop is still looking at index 0. But this time, this line executes:

// if (i == idx || nums[i] == nums[idx]) continue; // already positioned or nums[i] is a duplicate

// So we skip ahead to the next loop iteration without decrementing i again. Now we're finally on index 1.


var firstMissingPositive = function (array) {

    for (let index = 0; index < array.length; index++) {

        // 1 needs to be at the 0th spot, not necessarily sorted
        // otherwise it says 1 is missing, even though its there

        array

        const indexWhereItShouldBe = array[index] - 1

        index
        indexWhereItShouldBe

        // if (index == oneNumBelow || array[index] == array[oneNumBelow]) {

        array

        // if index 0 has the number 1
        // skip duplicates with continue

        // avoid infinite loops on [1, 1] with this
        // no point in swapping the same numbers

        const swapUsesTheSameNumber = array[index] == array[indexWhereItShouldBe]
        const numIsInPosition = index  == indexWhereItShouldBe

        if (numIsInPosition || swapUsesTheSameNumber) {

            array
            index
            indexWhereItShouldBe

            continue
        }

        indexWhereItShouldBe

        // index of -1 is not valid

        const swapIsInBounds = indexWhereItShouldBe >= 0 && indexWhereItShouldBe <= array.length - 1

        if (swapIsInBounds) {

            [array[index], array[indexWhereItShouldBe]] = [array[indexWhereItShouldBe], array[index]];
            array

            // check the swapped number
            index--
        }
    }

    // if theres a 1, force it to be at index 0
    array

    for (let index = 0; index < array.length; index++) {

        const currNum = array[index]
        
        // ignore (continue on) negative numbers and 0
        if (index + 1 == currNum) {
            continue
        }
        
        // if the next increment isnt found, there's a missing num
        // the out-of-place number could be like -80, so use the indexes as a guide
        
        else if (index + 1 != currNum) {
            let firstMissingNum =index + 1
            return firstMissingNum
        }
    }

    array
    
    // if they were all sorted in incremental order like [1,2,3,4,5], it gets here
    // the array is [1,2,...,n], and the missing number is n+1

    return array.length + 1
}

// console.log(firstMissingPositive([-4]), 1)
console.log(firstMissingPositive([1, 1]), 2, "should be [1, 2]")

// console.log(firstMissingPositive([3, 4, -1, 1]), 2, "[-1, 1, [2], 3, 4]")
// console.log(firstMissingPositive([1,2,0]),  3, "[0, 1, 2] is missing 3")

// console.log(firstMissingPositive([3, 1, 2, 4]), 5, "sorted is [1,2,3,4], so 5 is the next missing positive. n = 4 and array ends on 4, so it uses the other return statement")

// console.log(firstMissingPositive([2, 7, 8, 9, 11]), 1)
// console.log(firstMissingPositive([1, 7, 8, 9, 11]), 2)
// console.log(firstMissingPositive([2, 1, 4]), 3, "[1, 2, missing, 4]")