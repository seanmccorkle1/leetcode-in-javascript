/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many - depend on your schedule, but I think the number isnt really important. Learning from the question youve solved is indeed more essential.
* 
 * @param {string} 
 * @return {number}
 */


var myAtoi = function (stringnum) {

    stringnum

    stringnum = stringnum.trim()

    // param is a stringnum, so "" at worst    
    // check this after the trim(), so myAtoi("    ") should return 0

    if (stringnum == "" || stringnum == null) {
        return 0
    }

    // "assume the result is positive if neither + or - is present"
    let sign = 1

    let index = 0
    let currNum = 0

    let currString = ""
    let firstChar = stringnum[0]

    if (firstChar == '+') {
        index += 1 // start at the digit in "+3154", not the "+"
    }

    // only if the first non-whitespace character is + or -
    // -42 is valid, 42-3 is not
    else if (firstChar == '-') {
        sign = -1
        index += 1
    }
    stringnum

    // index was already set before this
    // for (; index < stringnum.length; index += 1) {

    index

    while (index < stringnum.length) {

        let charCode = stringnum.charCodeAt(index) - 48
        const charIsNotANumber = (charCode <= -1 || charCode >= 10)


        // -1 and 10 are not in the range [0 - 9]    

        if (charIsNotANumber) {
            break
        }

        // if (charCode <= -1 || charCode >= 10) {
        //         break
        // }

        currNum




        // cant start a left-hand side with a "-"


        // if (currString > 2147483647 / 10 || currNum > (2147483647 - charCode) / 10) {

        //     if (sign == 1) {
        //         return max 
        //     }

        //     else if (sign == -1){
        //         return min
        //     }

        // }

        // if (currNum > 2147483647 / 10 || currNum > (2147483647 - charCode) / 10) {
        //     return sign == 1 ? 2147483647 : -2147483648
        // } 

        // else {

        let digit = charCode

        currNum
        digit

        currNum = (currNum * 10) + digit

        currString += digit

        // currNum = currNum * 10 + charCode

        let max = 2 ** 31 - 1

        // need Math.pow with negatives in an exponent
        let min = Math.pow(-2, 31)


        if (currString > max ) {  // || currNum > (2147483647 - charCode) / 10) {
            if (sign == 1) {
                return max
            } 
            else if (sign == -1) {
                return min
            }

        }


        // }

        index += 1
    }


    // it becomes a negative at the end
    return currString * sign


    // check one more time

    // if (currString > 2147483647 / 10 || currNum > (2147483647 - charCode) / 10) {

    //     if (sign == 1) {
    //         return max 
    //     }

    //     else if (sign == -1){
    //         return min
    //     }
    // } 


    // return currNum * sign
}

console.log(myAtoi("+3154 with words"), 3154)

// console.log(myAtoi("-999999999999999"),  -2147483648)
// console.log(myAtoi("+999999999999999"),  2147483647)

// console.log(myAtoi("3154 with words"), 3154)
// console.log(myAtoi("3a154 with words"), 3)

// console.log(myAtoi("   -42"),  -42)
// console.log(myAtoi("42-3"), 42)


// console.log(myAtoi("0032"),  32)

// console.log(myAtoi(""),  0)
// console.log(myAtoi("   "),  0)