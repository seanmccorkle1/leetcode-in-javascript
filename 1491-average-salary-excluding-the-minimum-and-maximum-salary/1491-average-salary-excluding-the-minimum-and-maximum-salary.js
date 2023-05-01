var average = function(salaries) {
    
    salaries
    
    let min = Math.min(...salaries)
    let max = Math.max(...salaries)
    
    salaries.splice(salaries.indexOf(min), 1)
    salaries.splice(salaries.indexOf(max), 1)    
    
    let avg= salaries.reduce((sum, curr) => sum + curr, 0) / salaries.length
    return avg
    return Number(avg.toFixed(5))
    
}