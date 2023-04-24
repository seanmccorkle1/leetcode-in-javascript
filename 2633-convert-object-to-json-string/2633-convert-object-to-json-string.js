/**
 * @param {any} input
 * @return {string}
 */

var jsonStringify = function (input) {

    if (input == null) {
        return 'null'
    }

    // return the string value surrounded by double quotes.
    if (typeof input == 'string') {
        return `"${input}"`
    }

    // return its string representation.
    if (typeof input == 'number' || typeof input === 'boolean') {
        return input.toString()
    }

    // Recursively convert each item to a JSON string and join them with commas.

    if (Array.isArray(input)) {

        const array = input.map(item => jsonStringify(item))

        return `[${array}]`
        
        let s=`[${array}]`

        let s2=`[${array.join(",")}]`

        s.length
        s2.length

        return `[${array.join(",")}]`
    }

    // Recursively convert each value to a JSON string and pair it with the corresponding key.

    if (typeof input === "object") {

        const keys = Object.keys(input)
        const items = keys.map(key => '"' + key + '":' + jsonStringify(input[key]))
        
        // return '{' + items.join(',') + '}'
        return '{' + items + '}'
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