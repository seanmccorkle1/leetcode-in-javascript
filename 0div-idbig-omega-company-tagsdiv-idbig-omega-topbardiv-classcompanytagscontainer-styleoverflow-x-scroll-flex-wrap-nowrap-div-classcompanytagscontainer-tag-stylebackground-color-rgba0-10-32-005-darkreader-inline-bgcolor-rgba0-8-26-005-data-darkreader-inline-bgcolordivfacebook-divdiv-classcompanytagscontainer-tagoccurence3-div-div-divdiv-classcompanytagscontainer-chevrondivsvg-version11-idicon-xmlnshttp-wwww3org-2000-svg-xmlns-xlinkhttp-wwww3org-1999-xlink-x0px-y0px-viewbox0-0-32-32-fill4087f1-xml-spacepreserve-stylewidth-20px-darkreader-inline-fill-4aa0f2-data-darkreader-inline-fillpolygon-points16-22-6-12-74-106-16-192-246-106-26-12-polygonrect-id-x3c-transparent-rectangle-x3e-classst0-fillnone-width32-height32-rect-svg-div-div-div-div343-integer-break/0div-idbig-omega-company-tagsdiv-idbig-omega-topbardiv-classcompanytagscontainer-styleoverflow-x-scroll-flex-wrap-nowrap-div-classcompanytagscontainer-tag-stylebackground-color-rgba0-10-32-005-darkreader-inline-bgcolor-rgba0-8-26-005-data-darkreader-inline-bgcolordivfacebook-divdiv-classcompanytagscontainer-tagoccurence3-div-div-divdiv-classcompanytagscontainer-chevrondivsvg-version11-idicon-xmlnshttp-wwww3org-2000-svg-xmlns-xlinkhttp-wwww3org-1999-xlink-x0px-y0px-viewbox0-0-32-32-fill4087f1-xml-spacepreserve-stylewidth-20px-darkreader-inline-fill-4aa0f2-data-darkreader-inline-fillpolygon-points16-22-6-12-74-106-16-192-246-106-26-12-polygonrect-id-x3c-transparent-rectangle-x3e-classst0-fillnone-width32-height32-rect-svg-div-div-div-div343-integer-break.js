var integerBreak = function (num) {

    // 2 is the lowest in "constraints"
    if (num == 2) {
        return 1 // 1x1 = 1
    }

    // there must be at least 2 numbers, X and Y,
    // you cant break it into one number

    if (num === 3) {
        return 2
    }

    let countOf3s = Math.floor(num/3)
    let remainder =  num % 3

    if (remainder == 0){
        return Math.pow(3,countOf3s)

    }
    
    // {2,2} instead of {3,1}
    if (remainder == 1){
        return (Math.pow(3, countOf3s - 1) ) * 4
    }
    if (remainder == 2){
        return Math.pow(3, countOf3s) * 2
    }
}

// console.log(integerBreak(9), 27, " 3 x 3 x3 = 27, this also adds up to 9 | 3+3+3=9")

console.log(integerBreak(10), 36, "10 is (3 + 3 + 4)| This sequence of integers, {3, 3, 4}, also gives the highest product, 36 | (3 × 3 × 4) = 36")

// console.log(integerBreak(11), 54, "(3 x 3 x 3 x 2) = (27 x 2) = 54")

// integerBreak(2) // 1 + 1 = 2 | 1 × 1 = 1
// integerBreak(3) // 2 x1 = 2 and 2+1 = 3