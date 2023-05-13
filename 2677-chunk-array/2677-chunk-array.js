var chunk = function(array, size) {

    const chunkedArray = []
    let index = 0
    
    const a = [] 
    while (array.length != 0){

        let chunk = array.splice(0, size)
        a.push(chunk)
    }
    return a
    while (index < array.length) {
      
      let endIndex = index + size 
      array.slice(index, endIndex)
      
      chunkedArray.push(array.slice(index, index + size));
      index += size
  }
    
  return chunkedArray;
}

