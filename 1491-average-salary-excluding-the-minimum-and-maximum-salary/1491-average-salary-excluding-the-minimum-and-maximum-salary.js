var average = function(salaries) {
    
    salaries
    
    let min = Math.min(...salaries)
    salaries.splice(salaries.indexOf(min), 1)
    
    let max = Math.max(...salaries)
    salaries.splice(salaries.indexOf(max), 1)    
    
    // `salaries` has 2 less elements now
    // salaries.length was changed
    
    let avg= salaries.reduce((sum, curr) => sum + curr, 0) / salaries.length
    return Number(avg.toFixed(5))    
}