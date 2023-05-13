var solution = function(isBadVersion) {
    
    return function(n) {
        
        let start = 1

        // n isnt an index
        let end = n 
        
        while(start < end){
            
            let mid = Math.floor(start + (end - start) / 2)
            
            // go down to the FIRST bad version
            
            if (isBadVersion(mid)){
                end = mid
           }
            
            // if its a good version, go right to the first bad version
            else{
                start = mid + 1
           }
       }
       return start
    }
}