// Why not 4s?
//  Anytime we have a 4, we can always split it into two 2s,
// which will ultimately give an  equal product.

var integerBreak = function (num) {

    num

    // 2 is the lowest in "constraints"

    if (num == 2) {
        return 1 // 1x1 = 1
    }

    if (num === 3) {
        return 2 //  2x1 = 2
    }

    num

    // math floor over ~~ for edge conditions
    let countOf3s = Math.floor(num / 3)

    num
    let remainder = num % 3

    countOf3s

    // perfect fit, no -1s
    if (remainder == 0) {
        return Math.pow(3, countOf3s)
    }

    else if (remainder === 1) {

        countOf3s
        countOf3s - 1

        // order matters for Math.pow()
        const  pow = Math.pow(3, (countOf3s - 1))

        // avoid useless 27x1
        return pow * 2 * 2
    }

    else if (remainder == 2) {

        // pow redefined in its own bracket
        let pow = Math.pow(3, countOf3s)

        pow
        return pow * 2
    }
}

// integerBreak(9)  // 3 x 3 x3  = 27
integerBreak(10) // 36  | 3 + 3 + 4 = 10 |  (3 × 3 × 4) =  36 or (3 x 3 x2x2) = 36

// integerBreak(11) // 3 x 3 x 3 x 2 = 54

// integerBreak(2) // 1 + 1 = 2 | 1 × 1 = 1
// integerBreak(3) // 2 x1 = 2 and 2+1 = 3