var find132pattern = function (array) {

    let rightNum;

    // Initialise a empty stack...
    const stack = []

    array
    stack

    // Run a Loop from last to first index...

    for (let index = array.length - 1; index >= 0; index--) {

        let leftNum = array[index]

        // If leftNum is greater than the top element of stack,
        // then pop the element

        leftNum
        rightNum

        // mutually exclusive with the while condition
        if (leftNum < rightNum) {
            return true
        }

        leftNum
        stack

        rightNum

        while (
            leftNum > stack.at(-1)) {

            // this is the right one for now
            rightNum = stack.pop()
        }

        stack.push(leftNum)

        leftNum
        rightNum
    }

    // If the condition is not satisfied, return false.
    return false
}

find132pattern([-1, 3, 2, 0])
// find132pattern([3, 1, 4, 2]) // true
// find132pattern([1,2,3]) // false