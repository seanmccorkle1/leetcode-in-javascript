/**
 * @param {any} input
 * @return {string}
 */

var jsonStringify = function (input) {
    
    if (input == null) {
        return "null"
    }
    
    // return the string value surrounded by double quotes.
    if (typeof input == 'string') {
        return `"${input}"`
    }
    
    // return its string representation.
    
    if (typeof input == 'number') {
        return String(input)
    }
    
    if (typeof input == 'boolean'){
     return String(input)
    }
    
    // if its an array, go down until you get a primitive    
    
    
    if (Array.isArray(input)) {
        const array = input.map(item => jsonStringify(item))
        return `[${array}]`                
    }
    
    // if (typeof input == "object") {
    
    if (String(input).includes("object")) {
        const keys = Object.keys(input)
        const items = keys.map(key => '"' + key + '":' + jsonStringify(input[key]))
        
        return `{${items}}`
    }
}

// console.log(jsonStringify({
//     "y": 1,
//     "x": 2
// }), {
//     "y": 1,
//     "x": 2
// })

jsonStringify({"key":{"a":1,"b":[{},null,"Hello"]}})