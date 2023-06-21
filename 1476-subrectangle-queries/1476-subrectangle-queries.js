var SubrectangleQueries = function(rectangle) {
    this.rec = [...rectangle]
}

SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    
    for (let rowIndex = row1; rowIndex <= row2; rowIndex++){
        
        for (let columnIndex = col1; columnIndex <=col2; columnIndex++){
            this.rec[rowIndex][columnIndex] = newValue
        }
    }   
}

SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rec[row][col]
}

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
