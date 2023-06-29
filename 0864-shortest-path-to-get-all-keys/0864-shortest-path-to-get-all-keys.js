var shortestPathAllKeys = function(grid) {
    grid = grid.map(row => row.split(''));
    let locks = new Set(['A','B','C','D','E','F'])
    let keys = new Set(['a','b','c','d','e','f'])
    let visited = new Set();
    let maxRows = grid.length;
    let maxCols = grid[0].length;
    let keyCount = 0;
    let queue = [];
    let directions = [[-1,0],[1,0],[0,-1],[0,1]]
    for(let i=0; i<maxRows; i++){
        for(let j=0; j<maxCols; j++){
            if(keys.has(grid[i][j]))
                keyCount +=1;
            else if(grid[i][j] == '@'){
                visited.add(`${i},${j},[]`)
                queue.push([i,j,new Set(),0])
            }
        }
    }
    function explore(){
        while(queue.length){
            let [currX, currY, myKeys, count] = queue.shift();
            for(let [dx,dy] of directions){
                let newX = currX + dx;
                let newY = currY + dy;
                if(!visited.has(`${newX},${newY},[${Array.from(myKeys)}]`)){
                    if(newX >=0 && newX < maxRows && newY >=0 && newY < maxCols && grid[newX][newY] != '#'){
                        //walked over key
                        let newArr;
                        if(keys.has(grid[newX][newY])){
                            newArr = new Set([...myKeys]).add(grid[newX][newY])
                            if(newArr.size == keyCount){
                                return count + 1;
                            }
                            else{
                                newArr = new Set([...myKeys, grid[newX][newY]])
                                visited.add(`${newX},${newY},[${Array.from(newArr)}]`)
                                queue.push([newX,newY,newArr,count + 1])
                            }
                        }
                        //walked over lock and check has corresponding key
                        else if(locks.has(grid[newX][newY]) && myKeys.has(grid[newX][newY].toLowerCase())){
                            newArr = new Set([...myKeys]);
                            visited.add(`${newX},${newY},[${Array.from(newArr)}]`)
                            queue.push([newX, newY,newArr,count+1])
                        }
                        else if(grid[newX][newY] == '.' || grid[newX][newY] == '@'){
                            newArr = new Set([...myKeys]);
                            visited.add(`${newX},${newY},[${Array.from(newArr)}]`)
                            queue.push([newX, newY, newArr, count+1]);
                        }
                    }
                }
                
            }
        }
        return -1;
    }
    return explore();
};
