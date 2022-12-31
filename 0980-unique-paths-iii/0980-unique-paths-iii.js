var uniquePathsIII = function(grid) {
    let count = 0;
    let row;
    let col;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 0) {
                count++;
            }
            if (grid[i][j] == 1) {
                row = i;
                col = j;
            }
        }
    }
    
    return findPaths(grid, count + 1, row, col).length;    
};

function findPaths(grid, count, row, col) {
    if (row < 0 ||
       row > grid.length - 1 ||
       col < 0 || 
       col > grid[0].length - 1 ||
       grid[row][col] == -1 ||
       (grid[row][col] == 2 && count > 0)) {
        return [];
    }
    
    if (grid[row][col] == 2) {
        return [[row, col]];
    }
    
    let orig = grid[row][col];
    grid[row][col] = -1; // mark as visited
    
    let results = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for(let i = 0; i < directions.length; i++) {
        const [r, c] = directions[i];
        const paths = findPaths(grid, count - 1, row + r, col + c);
        for(let j = 0; j < paths.length; j++) {
            results.push([[row, col]].concat(paths[j]));   
        }
    }
    
    grid[row][col] = orig; // unvisit for next iteration    
    return results;
}