var SubrectangleQueries = function(rectangle) {
    this.rec = [...rectangle]
}

SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    
    for (let i=row1;i<=row2;i++){
        for (let j=col1;j<=col2;j++){
            this.rec[i][j] = newValue
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
