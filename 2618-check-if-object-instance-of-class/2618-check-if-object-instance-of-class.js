/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function(obj, classFunction) {
    
    
    // if you get anything thats not a function in the classFunction parameter
    
    if (obj==null  || typeof classFunction != "function") {
        return false
    }
    
    obj
    classFunction
    
    return (Object(obj) instanceof classFunction)
}

// console.log(checkIfInstanceOf(new Date(), Date), true)

console.log(checkIfInstanceOf(5, Number), true)
console.log(checkIfInstanceOf(5, Object), false)

console.log(checkIfInstanceOf("string", Number), false)
console.log(checkIfInstanceOf(null, null), false, "null is not a function")