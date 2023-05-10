var reduce = function(nums, reduceFn, initialValue) {
    
    let currSum = initialValue

    const arrayLength=nums.length

    for (let index = 0; index < arrayLength; index++) {
        const currNum = nums[index]
        
        // if currSum is on BOTH sides, dont use +=
        // this is an = case
        
        currSum = reduceFn(currSum, currNum)
    }
    
    return currSum
}

let initValue= 1

console.log(reduce([2,3,4,5], (sum, curr) => sum + curr, 12),    26)