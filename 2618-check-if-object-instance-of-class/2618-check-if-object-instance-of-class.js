/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function(obj, classFunction) {
    
    if (obj == undefined  || typeof classFunction != "function") {
        return false
    }    
    return (Object(obj) instanceof classFunction)
}

console.log(checkIfInstanceOf(new Date(), Date), true)