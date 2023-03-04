// (2 4 3 * +) becomes
// (2 + 4 * 3)

// the * applies to the most recently seen (4 and 3)
// the * itself is seen first bcause it comes before +

// no function keyword needed in objects
// no return needed in single-line arrow functions

var evalRPN = function (array) {

    const stack = []
    const operatorObj = {
        "+": (num1, num2) => {
            return num1 +num2
        },

        "-": (num1, num2) => {
            return num1 - num2
        },

        "*": (num1, num2) => {
            return num1 * num2
        },

        "/": (num1, num2) => {
            return Math.trunc(num1 / num2)
        }
    }


    for (let element of array) {

        const elementIsOperator = typeof operatorObj[element] == "function"


        if (elementIsOperator) {

            // [13, 5] should be 13 / 5
            // right gets popped first

            let rightNum = stack.pop()
            let leftNum = stack.pop()

            let functionPointer = operatorObj[element]

            let functionResult = functionPointer(leftNum, rightNum)

            // put the result back in the stack, 
            //see the console log statement
            
            stack.push(functionResult) 
        }

        else if (!elementIsOperator) {
            stack.push(Number(element))
        }
    }

    stack
    return stack[0]
}

// console.log(evalRPN(["2", "1", "+", "3", "*"]),  9)
console.log(evalRPN(["4", "13", "5", "/", "+"]), 6, "[4, 2, +] => [6] => 6")