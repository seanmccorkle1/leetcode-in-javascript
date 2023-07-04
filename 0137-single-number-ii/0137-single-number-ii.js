var singleNumber = function (array) {
    
    array.sort((a, b) => a - b)
    let threeIndex = 0
    
    while (threeIndex < array.length){
        
        const leftNum = array[threeIndex]
        const rightNum = array[threeIndex + 1]
        
        if (leftNum != rightNum){
            return leftNum
        }

        threeIndex += 3
    }
// for (let i = 0; i < nums.length; i += 3) {
//         if (nums[i] !== nums[i + 1]) {
//             return nums[i];
//         }
//     }
}