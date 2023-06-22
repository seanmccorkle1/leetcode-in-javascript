var numberOfSteps = function(num) {
    
    let count = 0
    
    while (num >= 1){
        if (num % 2== 0){
            num/=2
            count++
        }
        else {
            num-=1
            count++
        }
    }
    return count
    
}