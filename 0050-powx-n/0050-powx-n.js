var myPow = function (num, exp) {

    num
    exp

    const recursivePower = (num, exponent) => {

        if (num == 0) {
            return 0
        }

        if (exponent == 0) {
            return 1
        }

        const exponentIsEven = (exponent % 2) == 0

        if (exponentIsEven) {

            const returnValue = recursivePower(num, exponent / 2)
            return Math.pow(returnValue, 2)
        }

        else if (!exponentIsEven) {

            exponent = (exponent - 1) / 2

            const pow = Math.pow(recursivePower(num, exponent), 2)

            num
            pow

            return num * pow
        }
    }
    
    const absExp = Math.abs(exp)
    const poweredNum = recursivePower(num, absExp)

    if (exp <= -1) {
        return 1/poweredNum
    }
    
    return poweredNum
}

console.log(myPow(2.00000, 10), 1024)
console.log(myPow(2.10000, 3),  9.261) 