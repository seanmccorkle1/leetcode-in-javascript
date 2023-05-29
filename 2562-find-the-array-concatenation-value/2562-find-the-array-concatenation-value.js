var findTheArrayConcVal = function(nums) {
    
    const array=[]
    let realSum = 0
    
    while (nums.length != 0) {
        
        let first =nums.length ? String(nums.shift()) : ""
        let last=nums.length ? String(nums.pop()) : ""
        
        let concatString = first+last
        realSum += Number(concatString)
    }
    
    return realSum
}

// [7, 52, 2, 4] 
// "74"

// [52, 2]
// "522"

// 522 + 74 = 596