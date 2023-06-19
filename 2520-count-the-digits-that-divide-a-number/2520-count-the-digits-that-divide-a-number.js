

var countDigits = function(num) {

    
    const array = [...String(num)]
    
    let count=0
    
    for (let digit of array){
        
        digit = Number(digit)
        
        if ((num % digit) == 0){
           ++count
        }
    }
    return count
}