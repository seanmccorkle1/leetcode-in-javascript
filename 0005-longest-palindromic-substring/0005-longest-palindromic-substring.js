/**
 * Next questions:
 * 
 * Product of numCounts Except Self
 * Encode And Decode Strings \U0001f512	
 * Longest Consecutive Sequence	
 * Valid Palindrome	
 *
 * @function longestPalindrome("razcecar")
 * @return { "cec" }
 *
 * @explain { "cec" is a longer palindrome then "ra". }
 *
 */


var longestPalindrome = function(string) {

    // leftmostIndex: Left index of the longest palindrome.
    // rightmostIndex: Right index of the longest palindrome.

    // start both at 0 again
    let leftmostIndex = 0
    let rightmostIndex = 0


    // Iterate all palindromes with center indices
    // [..., index, ...] or [... index, index+1, ...]

    // Found a new palindrome [leftIndex, ..., index, fastIndex, ..., rightIndex]
    // Update the leftmost and rightmost  if the new palindrome is longer.

    string

    for (let slowIndex = 0; slowIndex < string.length; slowIndex++) {


        // they start at the same index, then right goes up 1 and left stays

        // leftIndex = 0, rightIndex = 0
        // leftIndex = 0, rightIndex = 1
        
        // leftIndex = 1, rightIndex = 1
         // leftIndex = 1, rightIndex = 2

         const twoIndexArray = [slowIndex, slowIndex + 1]
         
         twoIndexArray

        for (const fastIndex of twoIndexArray) {

            let leftIndex = slowIndex
            let rightIndex = fastIndex

            // while (string[leftIndex] && string[leftIndex] == string[rightIndex]) {
            // while (leftLetter && (leftLetter == rightLetter)) {
                
            var leftLetter = string[leftIndex]
            var rightLetter = string[rightIndex]

            leftLetter
            rightLetter

            var substringIsPalindrome = leftLetter && (leftLetter == rightLetter) ? true : false
            
            while (substringIsPalindrome) {

                leftLetter
                rightLetter

                // const prevDistance = Math.abs((rightmostIndex - leftmostIndex) + 1)
                // const currDistance = Math.abs((rightIndex - leftIndex) + 1)

                // currDistance
                // prevDistance

                // string.slice(0, 0) gives nothing, but both point to the letter at string[0]
                // it should be length 1 with string.slice(0, 1)

                const currPalindrome = string.slice(leftIndex, rightIndex + 1)
                const longestPalindromeFound = string.slice(leftmostIndex, rightmostIndex + 1)

                currPalindrome
                longestPalindromeFound

                if (currPalindrome.length > longestPalindromeFound.length) {
                    leftmostIndex = leftIndex
                    rightmostIndex = rightIndex
                }

                leftIndex -= 1
                rightIndex += 1

                leftLetter = string[leftIndex]
                rightLetter = string[rightIndex]
                
                substringIsPalindrome = leftLetter && (leftLetter == rightLetter) ? true : false

            }

            slowIndex
            fastIndex
        }
    }


    string
    
    // the right letter that rightmostIndex points to gets cut off in a slice
    // use (rightmostIndex + 1) to get that letter

    leftmostIndex
    rightmostIndex
    rightmostIndex + 1

    const sliceLength = (rightmostIndex + 1) - leftmostIndex
    sliceLength
    
    let finalPalindrome = string.slice(leftmostIndex, rightmostIndex + 1)

    return finalPalindrome
}

console.log(longestPalindrome("razcecar"),   "cec",     "cec is a longer palindrome than `ra` ")
// console.log(longestPalindrome("racecar"),    "racecar",  "the whole string is a palindrome")