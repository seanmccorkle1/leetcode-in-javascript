/**
 * @param {Function} fn
 * @return {Function}
 */

var curry = function (fn) {

    return function curryPointer(...curriedArgsArray) {

        curriedArgsArray

        fn
        

        if (fn.length == curriedArgsArray.length) {
            return fn(...curriedArgsArray)
        } 

        else if (curriedArgsArray.length < fn.length) {
            return function (...newArgs) {
                return curryPointer(...curriedArgsArray, ...newArgs)
            }
        }
    }
}


var threeSumFn = function(a, b, c) {return a + b + c}
let curriedSumFn = curry(threeSumFn)
curriedSumFn(3)(4)(5)