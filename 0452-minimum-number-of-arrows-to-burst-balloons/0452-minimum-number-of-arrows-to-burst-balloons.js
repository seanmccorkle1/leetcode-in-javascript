var findMinArrowShots = function(points) {
    
    points.sort((a, b) => a[0] - b[0])
    
    let prev = null
    let count = 0
    for (let [start, end] of points) {
        
        if ( prev < start|| prev == null ) {
            count++
            prev = end
        } 
        
        else prev = Math.min(prev, end);
    }
    
    return count
}