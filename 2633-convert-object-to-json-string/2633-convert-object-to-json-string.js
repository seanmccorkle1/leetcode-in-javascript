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
        return '"' + input + '"'
        return ` "${input}" `
    }

    
    // return its string representation.
    else if (typeof input == 'number') {
        return input.toString()
    }
    
    else if (typeof input == "boolean"){
        return String(input)
    }
    
    // if its an array, go down until you get a primitive    
    
    if (Array.isArray(input)) {
        const array = input.map(item => jsonStringify(item))
        return `[${array}]`                
    }
    
    else if (typeof input=="object") {

        
        if (Array.isArray(input)) {
            const array = input.map(item => jsonStringify(item))
            return `[${array}]`                
        }
    
        const fixedObj = Object.keys(input).map(key => {
            
            let value = input[key]
            
            if (typeof value == "number" || typeof value == "boolean") {
                value = String(value)
            } 
            
            else {
                value = jsonStringify(value)
            }
            return `"${key}":${value}`
        })
        
        return `{${fixedObj}}`
        
        // .map(key => '"' + key + '":' + jsonStringify(input[key]))

        // const items = Object.keys(input).map(key => '"' + key + '":' + jsonStringify(input[key]))
    
        // return `{${items}}`
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