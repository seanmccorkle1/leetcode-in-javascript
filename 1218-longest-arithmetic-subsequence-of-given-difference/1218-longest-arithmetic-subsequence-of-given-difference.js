var longestSubsequence = function(array, targetDifference) {
 
    // use maps for subsequence problems
    const map = new Map()
    let max = 0

    for (const num of array) {
        
        let difference = num - targetDifference
        let subsequenceLength = (map.get(difference) ?? 0) + 1
        map.set(num, subsequenceLength)
        
        if (subsequenceLength > max){
            max = subsequenceLength
        }
        // max = Math.max(subsequenceLength, max)
    }

    return max
}

console.log(longestSubsequence([1, 3, 5, 7], 2), 4)
// console.log(longestSubsequence([1,3,5,7], 33), 1)