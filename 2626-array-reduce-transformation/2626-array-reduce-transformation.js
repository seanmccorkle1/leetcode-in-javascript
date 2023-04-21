var reduce = function(nums, reduceFn, initialValue) {
    
    let currSum = initialValue

    for (let index = 0; index < nums.length; index++) {
        currSum = reduceFn(currSum, nums[index])
    }
    return currSum
}

const nums = [1, 2, 3, 4]
var fn = function sum(accum, curr) {
    return accum + curr;
}

let initialValue = 0

// reduce(nums, fn, initialValue)

reduce([2,3,4,5], (sum, curr) => sum + curr,  1)