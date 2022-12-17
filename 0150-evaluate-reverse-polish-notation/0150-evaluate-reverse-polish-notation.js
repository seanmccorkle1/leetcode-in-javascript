/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(array) {
    
    let stack= []
    
    const operatorObj = {
        "+": (num1, num2) => num1 + num2, 
        "-": (num1,num2) => num1 - num2, 
        "*": (num1, num2) => num1*num2,
        "/": (num1, num2) => Math.trunc(num1/num2)
    }
    
for (let element of array){

    const elementIsOperator = typeof operatorObj[element]=="function" ? true:false
    
    if (elementIsOperator){
        
        // keep num1 and num2 consistent
        let num2 = stack.pop() 
        let num1 = stack.pop()
        
        let func=operatorObj[element]

        // func will return a value

        let result = func(num1, num2)

        stack.push(result)
    }

        
    else if (!elementIsOperator){
        element = Number(element)//stringnum
        stack.push(element)
    }
}
    return stack[0]
}

console.log(evalRPN(["2","1","+","3","*"]), 9, "((2 + 1) * 3) = 9")