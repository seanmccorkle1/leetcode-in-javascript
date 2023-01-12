/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the num isn't really important. Learning from the question you've solved is more important.
* 
*/

/**
 * @param {num} num
 * @return {string}
 */

var intToRoman = function (num) {
    //  descending order object

    let currString = ""

            
    const letterObj = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    }

    // always start from "M"

    for (const letter in letterObj) {

        if (num == 0) {
            return currString
        }
        
        let letterNum = letterObj[letter]

   // 1 == 1, so put "I" in the string
  // thats why you use >=
    
        
        while (num >= letterNum) {
            currString += letter
            num -= letterNum

            currString
        }
        currString
    }

    return currString
}

console.log(intToRoman(19), "XIX")

// console.log(intToRoman(58), "LVIII")
// console.log(intToRoman(165), "CLXV")