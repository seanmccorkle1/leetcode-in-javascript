/**
 * @param {number[]} nums
 * @return {number}
 */

var findTheArrayConcVal = function(nums) {
    
    const array=[]

    while (nums.length != 0){
        
        let firstNum=nums.length ? nums.shift() : ""
        let lastNum=nums.length ? nums.pop() : ""
        
        let concatString = String(firstNum) + String(lastNum)
        array.push(Number(concatString))
    }
    
    return array.reduce((a,b)=>a+b,0)
}

// [7, 52, 2, 4] 
// "74"

// [52, 2]
// "522"

// 522 + 74 = 596