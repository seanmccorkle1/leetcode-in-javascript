var average = function(salaries) {
    
    salaries
    
    let min = Math.min(...salaries)    
    let max = Math.max(...salaries)
    
    let sum = 0
    
    sum-=min
    sum-=max

    for (const salary of salaries){
        sum += salary
    }
    
    sum = (sum /(salaries.length-2))

    // sum /= (salaries.length-2)
    return sum    
}

console.log(average([4000,3000,1000,2000], 2500.00000))