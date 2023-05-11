function helper(x, exponent) {
    if (exponent === 0) return 1
    if (x === 0) return 0
    
    if ((exponent % 2) == 0) {
        
        const returnValue = helper(x, exponent / 2) 
        return Math.pow(returnValue, 2)
  }
    else if ((exponent % 2) ==1){
              // x * helper(x, (n - 1) / 2) ** 2
        
        exponent = (exponent - 1) / 2
        // const oddExpValue = helper (x, (exponent - 1) / 2)

        const oddExpValue= Math.pow(helper(x, exponent), 2)
        return oddExpValue * x
        
    }
}


var myPow = function (x, n) {    
        const res = helper(x, Math.abs(n))
        return n < 0 ? 1 / res : res
}
