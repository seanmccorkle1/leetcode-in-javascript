var myPow = function (num, exp) {

    num
    exp

    const recursivePower = (x, exponent) => {

        if (x == 0) {
            return 0
        }

        if (exponent == 0) {
            return 1
        }

        const exponentIsEven = (exponent % 2) == 0

        if (exponentIsEven) {

            const returnValue = recursivePower(x, exponent / 2)
            return Math.pow(returnValue, 2)
        }

        else if (!exponentIsEven) {

            exponent = (exponent - 1) / 2

            const pow = Math.pow(recursivePower(x, exponent), 2)

            return x * pow
        }
    }

    const absExp = Math.abs(exp)
    const poweredNum = recursivePower(num, absExp)
    
    if (exp <= -1) {
        return 1/poweredNum
    }
    
    return Number(poweredNum.toFixed(5))
    return poweredNum
}

console.log(myPow(2.00000, 10), 1024)
console.log(myPow(2.10000, 3),  9.261) 