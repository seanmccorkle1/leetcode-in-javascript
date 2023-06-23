
var maxProduct = function(array) {
    
    let max = Math.max(...array)
        
    array.splice(array.indexOf(max), 1)
    let secondMax = Math.max(...array)
    
    return (max-1) *(secondMax-1)
}