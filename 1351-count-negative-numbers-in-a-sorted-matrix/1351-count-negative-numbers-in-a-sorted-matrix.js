/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {   
    let negCount=0
    
    grid = grid.flat(10)
    
    for (let num of grid){
        if (num <= -1){
            negCount++
        }
    }
    return negCount
}