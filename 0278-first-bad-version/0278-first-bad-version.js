function solution(isBadVersion) {
    
    return function(num) {
        
        // num isnt an index, 
        // so use [1, num] as left and right bounds
        
        let leftBound = 1
        let rightBound = num
        
        while (leftBound < rightBound){
            
            let midIndex = Math.floor((leftBound + rightBound) / 2)
            
            // go down to the FIRST bad version
            
            if (isBadVersion(midIndex)){
                rightBound = midIndex
           }

            // if its a good version, go right to the first bad version
            // the asymmetric (left + 1) has to be on left
            
            else {                 
                leftBound = midIndex + 1
           }
       }
        
        // both returns work, but only if the binary search is correct        
        return leftBound                
    }
}

// Input: num = 5, "bad" = 4
// Output: 4

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// 4 must be the first bad version.