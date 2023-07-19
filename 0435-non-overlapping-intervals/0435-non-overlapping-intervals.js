var eraseOverlapIntervals = function(array) {
    
    // sort by earliest finish time
    array.sort((a, b) => a[1] - b[1])
    
    let prev = array[0]
    let remove = 0
    
    for(let index = 1; index < array.length; index++) {
        
        const currInterval = array[index]
        
        if (currInterval[0] < prev[1]) {
            remove++
        }
        
        else {
            prev = array[index]
        }
    }
    
    return remove
}

