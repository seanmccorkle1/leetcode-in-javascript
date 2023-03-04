var lengthOfLongestSubstring = function (string) {

    const obj = {}

    let leftIndex = 0
    let rightIndex = 0

    // base case is 0 for "" which is length 0
    let maxUniqueSubstringLength = 0
    
    while (rightIndex < string.length) {
        let letter = string[rightIndex]


        // if the object already has it, move left part of the window up

        if (obj[letter] !== undefined) {

           leftIndex=
           Math.max(obj[letter] + 1,
                    leftIndex)
                }

        // letter is the key, rightIndex is the value
        // key = value

        obj[letter] = rightIndex

        leftIndex
        rightIndex

        obj

        // when rightIndex and leftIndex are both 0, its still "n", which is length 1
        
        maxUniqueSubstringLength = 
        Math.max(
            (rightIndex - leftIndex) + 1, 
            maxUniqueSubstringLength)
                        
        rightIndex++
    }
    return maxUniqueSubstringLength
}

console.log(lengthOfLongestSubstring("abcabcbb"), 3)
// console.log(lengthOfLongestSubstring("bbbbbb"), 1)
// console.log(lengthOfLongestSubstring("leetcode"), 5, "etcod")