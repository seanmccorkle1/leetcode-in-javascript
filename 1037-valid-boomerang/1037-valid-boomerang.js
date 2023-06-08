var isBoomerang = function(points) {
 
    let x1Difference = points[0][0] - points[1][0]
    let x2Difference = points[0][0] - points[2][0]
    
    
    let y1Difference = points[0][1] - points[1][1]
    let y2Difference=  points[0][1] - points[2][1]
    
    let sum =( x1Difference * y2Difference) - (x2Difference *y1Difference)
    
    // if its straight, its NOT a boomerang
    if (sum == 0){
        return false
    }
    return true
}
