// Next capital one questions:

// * Coin Change	35.5%	Medium	1.08	https://leetcode.com/problems/coin-change
// * Add Two Numbers	33.9%	Medium	1.25	https://leetcode.com/problems/add-two-numbers
// * Greatest Common Divisor of Strings	52.9%	Easy	0.12	https://leetcode.com/problems/greatest-common-divisor-of-strings



var lengthOfLongestSubstring = function (string) {

    const obj = {}

    let leftIndex = 0
    let rightIndex = 0

    // base case is 0 for "" which is length 0
    let longestSubstringWithNoRepeats = 0

    while (rightIndex < string.length) {

        const letter = string[rightIndex]

        longestSubstringWithNoRepeats

        // if the object already has it, move left part of the window up
        // "left part of the window" is leftIndex
        obj

        const isRepeatingLetter = obj[letter] != undefined

        if (isRepeatingLetter) {

            leftIndex =

                Math.max(
                    obj[letter] + 1,
                    leftIndex)
        }

        obj
        obj[letter] = rightIndex


        leftIndex
        rightIndex

        obj

        // when rightIndex and leftIndex are both 0,
        // the longest substring is "n", which is length 1

        longestSubstringWithNoRepeats =
            Math.max(
                (rightIndex - leftIndex) + 1,
                longestSubstringWithNoRepeats)

        rightIndex++
    }

    return longestSubstringWithNoRepeats
}

console.log(lengthOfLongestSubstring("abcabc"), 3)

console.log(lengthOfLongestSubstring("bbbbbb"), 1)
console.log(lengthOfLongestSubstring("leetcode"), 5, "etcod")