var reduce = function(nums, reduceFn, initialValue) {
    
    let answerSum = initialValue

    for (let index = 0; index < nums.length; index++) {
        // answerSum = reduceFn(answerSum, nums[index])
        initialValue = reduceFn(initialValue, nums[index])
    }
    return initialValue
    // return answerSum
}
