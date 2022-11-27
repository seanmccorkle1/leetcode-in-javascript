/*
 * @lc app=leetcode id=1790 lang=javascript
 *
 * [1790] Check if One String Swap Can Make Strings Equal
 */


// @lc code=start

var areAlmostEqual = function (string1, string2) {

    // not number of different letters, numOfDifferentSpots
    // "k" and "b" are 2 different letters
    // but they are different on the same 1 spot

    let differentSpotCount = 0

    let twoLetterArray = []


    if (string1.length !== string2.length) {
        return false
    }

    if (string1 === string2) {
        return true
    }

    // string1 and string2 must be the same length
    // "index < string1.length" is the same as "index < string2.length"

    for (let index = 0; index < string1.length; index += 1) {

        string1
        string2

        const currString1Letter = string1[index]
        const currString2Letter = string2[index]

        // this `if` statement executes everything
        // if the letters are equal, just continue

        if (currString1Letter === currString2Letter) {
            continue // skip all the code after, go next letters
        }
        
        
        differentSpotCount += 1

        // check this after the count is modified
        if (differentSpotCount >= 3) {
            return false
        }

        if (twoLetterArray.length === 0) {
            twoLetterArray = [currString1Letter, currString2Letter]
            continue // go next letters
        }

        // the left letter is the one that came first
        // and was stored in the array ["b", "k"]

        twoLetterArray

        let leftString1Letter = twoLetterArray[0]
        let leftString2Letter = twoLetterArray[1]

        leftString1Letter
        currString1Letter

        leftString2Letter
        currString2Letter

        // since the strings are the same length,
        // `b` in `kanb` is implicitly getting swapped to the first position like in `bank`

        checkIfTheStringSwapIsValid:
        if (leftString1Letter === currString2Letter && leftString2Letter === currString1Letter) {
            continue // keep going in case differenceCount goes above 2
        }

        // once a string swap attempt fails, return false
        // cause that means the strings cant be entirely equal when swapped

        else {
            return false
        }

    } // end for loop

    // the two strings have to be unequal at exactly 2 spots
    // for the swap to work

    if (differentSpotCount === 2) {
        return true
    } 
    else return false
}

console.log(areAlmostEqual("bank", "kanb"), true, "swap `k` and `b` in string2 to make both equal to `bank` ")

// console.log(areAlmostEqual("equal", "equal"), true, "return true if they're the same string")
// console.log(areAlmostEqual("asd", "zxc"), false, "not the same length, a string swap cant make both equal")

// @lc code=end