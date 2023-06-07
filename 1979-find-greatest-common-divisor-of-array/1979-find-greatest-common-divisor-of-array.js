var findGCD = function(array) {
    array.sort((a,b)=>a-b)
    
    let divisor = array[0]
    
    while (divisor >= 1){

        if (array[0] % divisor == 0 && array.at(-1) % divisor == 0){
            return divisor
        }
        
        divisor--
    }
    // return divisor
}