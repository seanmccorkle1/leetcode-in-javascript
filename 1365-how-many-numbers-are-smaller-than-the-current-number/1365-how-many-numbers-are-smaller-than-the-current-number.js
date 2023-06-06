
var smallerNumbersThanCurrent = function(array) {
    
    let sortedArrayCopy= array.slice().sort((a,b)=>a - b)
    
    return array.map(num => sortedArrayCopy.indexOf(num))
}