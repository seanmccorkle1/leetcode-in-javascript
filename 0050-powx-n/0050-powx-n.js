var myPow = function (num, exp) {
    
    const recursivePower = (x, exponent) => {
    
        if (exponent == 0) {
            return 1
        }
    
        if (x == 0) {
            return 0
        }
    
        const exponentIsEven = (exponent % 2) == 0

        if (exponentIsEven) {
        
            const returnValue = recursivePower(x, exponent / 2) 
            return Math.pow(returnValue, 2)
        }
        
        else if (!exponentIsEven) {
            exponent = (exponent - 1) / 2
        
            const pow = Math.pow(recursivePower(x, exponent), 2)
            return pow * x
        }
        
        
    }
    
    const absExp = Math.abs(exp)
    const poweredNum = recursivePower(num, absExp)

    if (exp <= -1) {
        return Math.abs(1/poweredNum) // abs not needed
    }

    return poweredNum
}
