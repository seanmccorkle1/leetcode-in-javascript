/**
 * Next questions:
 * 
 * Product of Array Except Self
 * Encode And Decode Strings \U0001f512	
 * Longest Consecutive Sequence	
 *
 * 
 * @function evaluateRPN
 * @return { "cec" }
 *
 * @explain { "cec" is a longer palinxdrome then "ra". }
 *
 */

/**

* Evaluate reverse polish notation (RPN)

* @function evaluateRPN
* @return { "cec" }
*
* @explain { "cec" is a longer palinxdrome then "ra". }
*/

// (2 4 3 * +) becomes
// (2 + 4 * 3)

// the * applies to the most recently seen (4 and 3)
// the * itself is seen first bcause it comes before +

// no function keyword needed in objects
// no return needed in single-line arrow functions

var evalRPN = function (array) {
    
    let operatorCount=0
    let numCount = 0
    let operators="*/+-x"

    for (let scalar of array){

        if (operators.includes(scalar)) {
            operatorCount++
        }
        else numCount++
    }

    numCount++
    operatorCount++

    if (operatorCount >= numCount){
        return 0
    }

    const stack = []
    
    var finalArithmeticNum = 0


    const operatorObj = {
        "+": (num1, num2) => {return Number(num1) + Number(num2)} ,
        "-": (num1, num2) => {return num1 - num2} ,
        "*": (num1, num2) => {return num1 * num2} ,
        "/": (num1, num2) =>{return Math.trunc(num1 / num2) }
    }

    
    for (const scalar of array) {

        const elementIsOperator = typeof operatorObj[scalar] == "function"

        if (elementIsOperator) {

            const num1 = stack.pop()
            const num2 = stack.pop()

            var leftToRightArithmeticFn = operatorObj[scalar]

            // leftToRightArithmeticFn will return a value

            let arithmeticValue = leftToRightArithmeticFn(num2, num1)
            stack.push(arithmeticValue)
        }
                
        else if (!elementIsOperator) {
            stack.push(Number(scalar))
        }
    }


    stack

    if (stack.length >= 2){
        return 0 
    }

    // final math value
    finalArithmeticNum = stack.at(0)

    return finalArithmeticNum
}

console.log(evalRPN(["2", "1", "+", "3", "*"]), 9)

// console.log(evalRPN(["4","13","5","/","+"]), 6, "(4 + (13 / 5)) => (4 + 2) = 6", "/ applies to the most recent numbers 13 and 5, / is seen before + as it still goes left-to-right")