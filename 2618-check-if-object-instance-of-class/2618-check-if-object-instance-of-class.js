/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function(num, classFunction) {
    
    // if you get anything thats not a function in the classFunction parameter
    // Object(undefined) still counts as type object
    
    if (num ==null || typeof classFunction !="function") {    
        return false
    }
    
    // Primitives are not objects and do not have properties or mehods, 
    // so the instanceof operator returns false when you use it with a primitive.
    
    // make the "object" consistent with what instanceof can take
    
    return Object(num) instanceof classFunction ? true:false
}

// console.log(checkIfInstanceOf(new Date(), Date), true)

// console.log(checkIfInstanceOf(5, Number), true)
// console.log(checkIfInstanceOf(5, Object), false)

// console.log(checkIfInstanceOf("string", Number), false)
// console.log(checkIfInstanceOf(null, null), false)