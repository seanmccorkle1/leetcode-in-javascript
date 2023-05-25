var chunk = function(array, size) {
    
    const chunkedArray = []
    
    array
    size

    // array length cant get to -1 or below
    // so array.length != 0 is a stronger condition than you think

    while (array.length != 0){        
        let chunk = array.splice(0, size)
        chunkedArray.push(chunk)
    }
    chunkedArray.slice(1)
    return chunkedArray
}

console.log(chunk([1,9,6,3,2], 3), [[1,9,6],[3,2]])