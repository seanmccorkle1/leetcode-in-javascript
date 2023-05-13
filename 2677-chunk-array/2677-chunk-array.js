var chunk = function(array, size) {
    
    const chunkedArray = []
    
    array
    size

    while (array.length != 0){        
        let chunk = array.splice(0, size)
        chunkedArray.push(chunk)
    }
    
    return chunkedArray
}