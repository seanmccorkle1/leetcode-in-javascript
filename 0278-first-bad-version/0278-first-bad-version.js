var solution = function(isBadVersion) {
    
    return function xd(num) {

        // num isnt an index, 
        // so use [1, num] as left and right bounds

        let leftBound = 1
        let rightBound = num

        while(leftBound < rightBound){
            
            // let midIndex = Math.floor(leftBound + (rightBound - leftBound) / 2)
            
            let midIndex = Math.floor((leftBound + rightBound) / 2)

            // go down to the FIRST bad version
            
            if (isBadVersion(midIndex)){
                rightBound = midIndex
           }

            // if its a good version, go right to the first bad version
            else {
                leftBound = midIndex + 1
           }
       }
       return leftBound
    }
}