/**
 * @param {number} num
 * @return {Function} counter
 */

// the return value is a function
var createCounter = num => () => {return num++}
const counter = createCounter(10)

counter() // 10
counter() // 11
counter() // 12
