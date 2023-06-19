var countDigits = function(num) {

    let count=0
    const array = [...String(num)].map(d => Number(d))
    
    for (let digit of array){
        
        // digit = Number(digit)
        
        if ((num % digit) == 0){
           ++count
        }
    }
    return count
}