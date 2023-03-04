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

        let indexOfLastTimeLetterWasSeen = obj[letter]

        // if its already in the object, it repeats

        const isRepeatingLetter = indexOfLastTimeLetterWasSeen != undefined

        leftIndex

        // obj[letter] + 1 to start leftIndex after the repeating letter

        
        if (isRepeatingLetter) { 

            letter
            obj
            
            leftIndex =
                Math.max( 
                    obj[letter] + 1, 
                    leftIndex) 
        }

        leftIndex
        rightIndex

        obj

        // when rightIndex and leftIndex are both 0,
        // the longest substring is "n", which is length 1

        // longest is same as Math.max()

        longestSubstringWithNoRepeats =
            Math.max(
                (rightIndex - leftIndex) + 1,
                longestSubstringWithNoRepeats)

        
        // same as {"a": 0}
        obj[letter] = rightIndex

        obj
        rightIndex++
    }

    // ("abc", "bca", "cab", "abc") are all non-repeating and length 3
    return longestSubstringWithNoRepeats
}

console.log(lengthOfLongestSubstring("abcabc"), 3)
// console.log(lengthOfLongestSubstring("bbbbbb"), 1)

// console.log(lengthOfLongestSubstring(""), 0)
// console.log(lengthOfLongestSubstring("a"), 1)