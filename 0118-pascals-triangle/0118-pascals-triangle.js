


var generate = function(numRows) {

    if (numRows === 0) {
        return []
    }

    
    const doubleArray = [[1]]    

    // start with leftmost 1 on each iteration


    for (let index = 1; index < numRows; index += 1) { 

        const rowArray = [1] 

        let numIndex = 1
        
        while (numIndex < index) {

            let leftNumber = doubleArray[index - 1][numIndex - 1]  
            let rightNumber = doubleArray[index - 1][numIndex]

            rowArray.push(leftNumber + rightNumber) 
            
            numIndex++
    }

    // need [x, 1] at the end 
    
    rowArray.push(1) 

    rowArray

    doubleArray.push(rowArray)
  }
  //   [1],
  //   [1,1],
  //   [1,2,1],
  //   [1,3,3,1],
  //   [1,4,6,4,1]

  return doubleArray
}

  console.log(
    generate(5), [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]])