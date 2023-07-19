var eraseOverlapIntervals = function (array) {
    
    // sort by earliest finish time
    array.sort((a, b) => a[1] - b[1])

    let prevInterval = array[0]
    let removeCount = 0
    
    for (let index = 1; index < array.length; index++) {
        
        const currInterval = array[index]

        let a =prevInterval[1]
        let b =currInterval[0]
        
        if (b < a) {
            removeCount++
        }
        
        else {
            prevInterval = array[index]
        }
    }
    
    return removeCount
}

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]), 1)