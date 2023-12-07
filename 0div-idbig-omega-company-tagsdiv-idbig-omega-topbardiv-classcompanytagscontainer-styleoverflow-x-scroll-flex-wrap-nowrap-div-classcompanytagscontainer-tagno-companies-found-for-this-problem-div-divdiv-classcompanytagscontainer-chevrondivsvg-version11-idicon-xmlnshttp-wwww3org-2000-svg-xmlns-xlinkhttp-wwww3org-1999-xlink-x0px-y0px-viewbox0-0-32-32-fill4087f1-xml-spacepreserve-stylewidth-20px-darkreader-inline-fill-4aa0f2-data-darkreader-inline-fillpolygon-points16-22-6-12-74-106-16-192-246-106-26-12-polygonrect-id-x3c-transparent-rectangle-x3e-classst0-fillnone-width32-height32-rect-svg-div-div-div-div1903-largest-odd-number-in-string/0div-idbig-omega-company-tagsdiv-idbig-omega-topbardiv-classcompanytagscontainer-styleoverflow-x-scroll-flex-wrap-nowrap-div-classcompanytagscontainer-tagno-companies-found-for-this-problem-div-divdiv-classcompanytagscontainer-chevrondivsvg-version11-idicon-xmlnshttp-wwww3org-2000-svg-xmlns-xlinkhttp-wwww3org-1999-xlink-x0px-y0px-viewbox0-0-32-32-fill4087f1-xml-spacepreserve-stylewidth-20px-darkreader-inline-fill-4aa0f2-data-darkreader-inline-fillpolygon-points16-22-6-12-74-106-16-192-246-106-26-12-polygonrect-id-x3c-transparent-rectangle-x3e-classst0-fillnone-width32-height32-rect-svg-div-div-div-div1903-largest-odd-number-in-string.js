var largestOddNumber = function(num) {
    
    for (let index=num.length - 1; index >= 0; index--){
        if (num[index]%2== 1){
            return num.slice(0,   index+1)
        }
    }
    
    return ""
}