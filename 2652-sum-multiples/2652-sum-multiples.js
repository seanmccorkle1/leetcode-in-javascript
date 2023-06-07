var sumOfMultiples = function(num) {
    
    let sum=0
    for (let index=2; index<= num; index++){
        
        if (index % 3==0 || index % 5 == 0 || index % 7 ==0){
            sum += index
        }
    }
    return sum
}

console.log(sumOfMultiples(10), 40, [3, 5, 6, 7, 9, 10])