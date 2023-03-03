// Next capital one questions:

// * Coin Change	35.5%	Medium	1.08	https://leetcode.com/problems/coin-change
// * Add Two Numbers	33.9%	Medium	1.25	https://leetcode.com/problems/add-two-numbers
// * Greatest Common Divisor of Strings	52.9%	Easy	0.12	https://leetcode.com/problems/greatest-common-divisor-of-strings

// Named default parameters:

// var multiplyTwo =  ({num1, num2 } = {}) =>  num1*num2
// console.log(multiplyTwo({ num1: 4, num2: 4}),  16)


var countOdds = function (lowNum, highNum) {

    const lowNumIsEven = (lowNum % 2 == 0) ?true:false
    const highNumIsEven = highNum % 2 == 0

    // lowNum going up keeps it in the range
    if (lowNumIsEven) {
        lowNum = lowNum + 1
    }

    // highNum going down keeps it in the range
    if (highNumIsEven) {
        highNum = highNum - 1
    }

    let range = highNum - lowNum

    return range/2+1
}

console.log(countOdds(3, 7),  3, "there are 3 odd numbers in the range [3, 5, 7]")
console.log(countOdds(3, 6),   2, [3, 5])

// console.log(countOdds(8, 10), 1, "9 is the only odd in [8, 9, 10]")