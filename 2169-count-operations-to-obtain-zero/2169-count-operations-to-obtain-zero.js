
var countOperations = function(num1, num2) {
    
    let count=0
    while (num1 >= 1 && num2 >= 1){
        
        if (num1 >= num2){
            num1 -= num2
            count++
        }
        else {
            num2 -= num1
            count++
        }
    }
    return count
}