var find132pattern = function (array) {

    let rightNum = -Infinity

    // Initialise a empty stack...
    const stack = []

    array
    stack

    // Run a Loop from last to first index...

    for (let index = array.length - 1; index >= 0; index--) {

        let currNum = array[index]

        // If currNum is greater than the top element of stack,
        // then pop the element

        stack
        currNum

        if (currNum < rightNum) {
            return true
        }

        while
        (currNum > stack.at(-1)) {

            rightNum = stack.pop()
        }

        stack.push(currNum)

        currNum
        rightNum


    }

    // If the condition is not satisfied, return false.
    return false
}

// find132pattern([3, 1, 4, 2]) // true
find132pattern([1,2,3]) // false