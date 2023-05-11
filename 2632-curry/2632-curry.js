/**
 * @param {Function} fn
 * @return {Function}
 */

var curry = function (fn) {

    return function curried(...curriedArgsArray) {

        curriedArgsArray

        fn
        curried

        if (fn.length == curriedArgsArray.length) {
            return fn(...curriedArgsArray)
        } 

        else if (curriedArgsArray.length < fn.length) {
            return function (...newArgs) {
                return curried(...curriedArgsArray, ...newArgs)
            }
        }
    }
}


var threeSumFn = function(a, b, c) {return a + b + c}
let curriedSumFn = curry(threeSumFn)
curriedSumFn(3)(4)(5)