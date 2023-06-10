var smallestEvenMultiple = function(num) {
    
    if (num % 2 == 0){
        return num
    }
    
    return num*2
}

console.log(smallestEvenMultiple(5), 10)
// console.log(smallestEvenMultiple(6), 6)
// console.log(smallestEvenMultiple(7), 14)