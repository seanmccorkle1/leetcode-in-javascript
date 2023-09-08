


var generate = function(numRows) {

    if (numRows === 0) {
        return []
    }

    
    const doubleArray = [[1]]    

    // start with leftmost 1 on each iteration


    for (let index = 1; index < numRows; index += 1) { 

        const rowArray = [1] 

        let index2 = 1


        nestedLoop:        
        while (index2 < index) {

            let leftNumber = doubleArray[index - 1][index2 - 1]  
            let rightNumber = doubleArray[index - 1][index2]

            rowArray.push(leftNumber + rightNumber) 
            
            index2++
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