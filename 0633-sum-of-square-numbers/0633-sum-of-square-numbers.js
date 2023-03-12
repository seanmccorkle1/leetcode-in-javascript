
var judgeSquareSum = function(num){

    let squareRoot1= 1
    let squareRoot2=Math.trunc(Math.sqrt(num))

    if (squareRoot2**2 == num)return true
    
    while (squareRoot1 <= squareRoot2){

        let sum = Math.pow(squareRoot1, 2) + Math.pow(squareRoot2, 2)

        if (sum==num){
            return true
        }

        if (sum<num ) {
            squareRoot1++
        }

        else if (sum > num) {
            squareRoot2--
        }
    }

    return false
}

// console.log(judgeSquareSum(2), true, "(1x1 + 1x1) => (1 + 1) => 2")

console.log(judgeSquareSum(144), true, "0^2 + 12^2 = 144")

// console.log(judgeSquareSum(146), true, "(11^2 + 5^2) = (121 + 25) = 146")

// console.log(judgeSquareSum(11), false, "no 2 square roots exist that sum to 11")