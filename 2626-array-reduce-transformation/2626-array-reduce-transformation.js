var reduce = function(nums, reduceFn, initialValue) {
    
    let currSum = initialValue

    for (let index = 0; index < nums.length; index++) {
        const currNum = nums[index]
        currSum = reduceFn(currSum, currNum)
    }
    return currSum
}

let initValue= 1
console.log(reduce([2,3,4,5], (sum, curr) => sum + curr,  initValue),   15)