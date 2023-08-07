var searchMatrix = function(matrix, target) {
    
    if (!matrix.length || !matrix[0].length) {
        return false
    }
    
  let row = 0
  
  // index
  let col = matrix[0].length - 1 
  
  while (col >= 0 && row <= matrix.length - 1) {
      
      let currNum = matrix[row][col]
      
      if (currNum == target) {
          return true
      }
      
      else if (currNum < target) {
          row+= 1
      }
      
      else if (currNum > target){
          col -= 1
      }      
  }
    // opposite of "true" in the loop
    return false
}

