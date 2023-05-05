var average = function(salaries) {
    
    let min = Math.min(...salaries)    
    let max = Math.max(...salaries)
    
    let avgSalary = 0
    
    avgSalary-=min
    avgSalary-=max
    
    for (const salary of salaries){
        avgSalary += salary
    }
    
    avgSalary /= (salaries.length - 2)
    return avgSalary
}
console.log(average([4000,3000,1000,2000], 2500.00000))