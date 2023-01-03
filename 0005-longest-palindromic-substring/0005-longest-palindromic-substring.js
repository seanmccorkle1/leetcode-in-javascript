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
        
        // 0(left) + 0(right) = 0 (even length)
        // 0 + 1 = 1 (odd)
        
        const oddAndEvenIndexArray = [slowIndex, slowIndex + 1]

        oddAndEvenIndexArray
        
        // loop 2 times, one for an even-length substring [2, 4,6] and one for an odd-length [1, 3, 5, 7]
        // because the distance is 2 away on each loop (leftIndex-- and rightIndex++)
        
        
        for (const fastIndex of oddAndEvenIndexArray) {

            let leftIndex = slowIndex
            let rightIndex = fastIndex
                        
            let leftLetter = string[leftIndex]
            let rightLetter = string[rightIndex]
            
            leftLetter
            rightLetter
            
            var substringIsPalindrome = 
                (leftLetter && (leftLetter == rightLetter)) ? true : false
            
            
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

                // go more to the left
                leftIndex -= 1
                
                rightIndex += 1

                leftLetter = string[leftIndex]
                rightLetter = string[rightIndex]
                
                substringIsPalindrome = (leftLetter && (leftLetter == rightLetter)) ? true : false

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
    
    // it would be string.slice(3, 5) (2 letters) without the +1
    
    let finalPalindrome = string.slice(leftmostIndex, rightmostIndex + 1)

    return finalPalindrome
}

console.log(longestPalindrome("razcecar"),   "cec",     "cec is the only SUBSTRING thats a palindrome, the two `ra`'s are separated, theyre not substrings")

// console.log(longestPalindrome("racecar"),    "racecar",  "the whole string is a palindrome")