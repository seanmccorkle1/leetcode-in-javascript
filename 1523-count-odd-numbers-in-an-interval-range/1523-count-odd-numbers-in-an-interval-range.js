var countOdds = function (lowNum, highNum) {

    const lowNumIsEven = lowNum % 2 == 0
    const highNumIsEven = highNum % 2 == 0

    // count odd numbers, so make it odd

    if (lowNumIsEven) {
        lowNum = lowNum + 1
    }

    if (highNumIsEven) {
        highNum = highNum - 1
    }

    let range = highNum-lowNum

    return range/2 + 1

}

console.log(countOdds(3, 7), 3, [3, 5, 7], "range is 5, odd")
console.log(countOdds(3, 6), 2, [3, 5], "range is even 4")
console.log(countOdds(8, 10), 1, "9 is the only odd in [8, 9, 10]")