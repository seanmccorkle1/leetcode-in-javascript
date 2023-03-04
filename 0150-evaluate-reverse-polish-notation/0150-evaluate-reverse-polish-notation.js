// (2 4 3 * +) becomes
// (2 + 4 * 3)


// the * applies to the most recently seen (4 and 3)
// the * itself is seen first bcause it comes before +


// no function keyword needed in objects
// no return needed in single-line arrow functions



var evalRPN = function (array) {


    const stack = []
    var finalArithmeticNum = 0



    const operatorObj = {
        "+": (num1, num2) => {
            return Number(num1) + Number(num2)
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
    
    for (const element of array) {

        const elementIsOperator = typeof operatorObj[element] == "function"

        if (elementIsOperator) {
            const num1 = stack.pop()
            const num2 = stack.pop()


            var leftToRightArithmeticFn = operatorObj[element]


            let arithmeticValue = leftToRightArithmeticFn(num2, num1)
            stack.push(arithmeticValue)
        }

        else if (!elementIsOperator) {
            stack.push(Number(element))
        }
    }

    stack

    // final math value
    finalArithmeticNum = stack.at(0)

    return finalArithmeticNum
}


console.log(evalRPN(["2", "1", "+", "3", "*"]), 9)


// console.log(evalRPN(["4","13","5","/","+"]), 6, "(4 + (13 / 5)) => (4 + 2) = 6", "/ applies to the most recent numbers 13 and 5, / is seen before + as it still goes left-to-right")