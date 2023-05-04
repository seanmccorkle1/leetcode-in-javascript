var reverse = function (number) {
    
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(2,31) * -1
    
    let reversedNum;
    
    if (number <= -1) {
        
        reversedNum = number.toString().slice(1).split("").reverse().join("")
        reversedNum = reversedNum * -1
        
        if (reversedNum < min) {
            return 0 
        }
        
        return reversedNum
    }
    
    else if (number >= 0) {                
        
        reversedNum= Number(number.toString().split("").reverse().join(""))
        
        if (reversedNum > max) {
            return 0
        }
        
        return reversedNum
    }
}
console.log(reverse(123),  321)