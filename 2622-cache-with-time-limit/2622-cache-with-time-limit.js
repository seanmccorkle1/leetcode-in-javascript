// Use Map instead of an object for map.size

const TimeLimitedCache = function () {
    this.cache = new Map();
}

// @return {boolean} if un-expired key already existed

// ConstructorFunction.prototype.name = function()
// arrow functions arent allowed with prototypes

TimeLimitedCache.prototype.set = function (key, value, milliseconds) {
    
    let found = this.cache.has(key)    
    
    // Both the value and duration should be overwritten if the key already exists.
    // clear then set
    
    if (found) {
        clearTimeout(this.cache.get(key).timeoutFunction)
    }
    
    this.cache.set(key, {
        valueKey: value, 

        // run the delete function after x milliseconds
        timeoutFunction: setTimeout(() => this.cache.delete(key), milliseconds)
    })
    
    return found
}

/** 
 * @param {number} key
 * @return {number} value associated with key
 */

TimeLimitedCache.prototype.get = function (key) {
    return this.cache.has(key) ? this.cache.get(key).valueKey : -1
}


TimeLimitedCache.prototype.count = function () {
    return this.cache.size
}

const obj = new TimeLimitedCache()

obj.set(1, 42, 1000); // false
obj.get(1) // 42
obj.count() // 1
