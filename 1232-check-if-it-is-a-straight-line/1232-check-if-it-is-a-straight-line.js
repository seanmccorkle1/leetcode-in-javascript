var checkStraightLine = function(coords) {
    
    for (let index = 0; index < coords.length - 2; index++) {
        
        let num1 = coords[index][0] * coords[index + 1][1] + 
            coords[index + 1][0] * coords[index + 2][1] +
            coords[index + 2][0] * coords[index][1]
        
        let num2 = coords[index][1] * coords[index + 1][0] + 
            coords[index + 1][1] * coords[index + 2][0] + 
            coords[index + 2][1] * coords[index][0]
        
        const area = 0.5 * (num1 - num2)     
        
        const notAStraightLine =  (area != 0) ? true : false
        
        if (notAStraightLine) {
            return false
        }
    }
    
    return true
}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), true)
// console.log(checkStraightLine( [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]), false)