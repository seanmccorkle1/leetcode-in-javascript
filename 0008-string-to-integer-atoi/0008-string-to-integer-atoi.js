/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many - depend on your schedule, but I think the number isnt really important. Learning from the question youve solved is indeed more essential.
* 
 * @param {string} 
 * @return {number}
 */

var myAtoi = function (stringnum) {

    stringnum = stringnum.trim()

    // param is a stringnum, so "" at worst    
    // check this after the trim(), so myAtoi("    ") should return 0

    if (stringnum == "" || stringnum == null)  { 
        return 0
    }

    // "assume the result is positive if neither + or - is present"
    let sign = 1

    let index = 0

    let currNum = 0
    let firstChar = stringnum[0]

    if (firstChar == '+') {
        index += 1 // start at "3" in "+3154", not the "+"
    }

    // only if the first non-whitespace character is + or -
    // -42 is valid, 42-3 is not

    if (firstChar == '-') {
        sign = -1
        index += 1
    }

    // "3".charCodeAt() = 51
    // String.fromCharCode(51) = "3"

    // "w".charCodeAt() - 48 = 71
    // 71 is not in the range [0-9], so 71 must be a letter

    stringnum
    index


    while (index < stringnum.length) {
    
        index

        let charCode = stringnum.charCodeAt(index) - 48

        const charIsNotANumber = (charCode <= -1 || charCode >= 10)

        // -1 and 10 are not in the range [0 - 9]    

        if (charIsNotANumber) {
            break // break before adding the letter
        }

        // convert these string digits into an INTEGER
        // "0032" -> 32

        let digit = charCode

        // start with (0x10) + 3 = 3
        // then (3 x 10) + 1 = 31
        // each extra digit is another place, ie x10

        currNum
        currNum * 10

        currNum
        digit

        let sum = (currNum *  10) + digit

        // overwrite, dont do += or you get 3 + 31 (34)

        currNum = sum


        // need Math.pow with negatives in an exponent instead of -2 ** 31

        let max = Math.pow(2, 31) - 1
        let min = Math.pow(-2, 31)

        // it becomes a negative at the end, 
        //right now you only look at unsigned (positive)

        // if num is 2147483647, its ok, its inclusive

        // check AFTER currNum is updated

        if (currNum > max) {

            if (sign == 1) {
                return max
            }

            else if (sign == -1) {
                return min
            }
        }

        index += 1
    }

    sign

    currNum

    if (sign == -1){
        return currNum * -1
    }

    else return currNum
}    

// console.log(myAtoi("3154 with words"), 3154)
// console.log(myAtoi("+3154 with words"), 3154)

// console.log(myAtoi("   -42"),  -42)

// console.log(myAtoi("-999999999999999"),  -2147483648)
// console.log(myAtoi("+999999999999999"),  2147483647)

console.log(myAtoi("0032"),  32)

// console.log(myAtoi(""),  0)
// console.log(myAtoi("   "),  0)