const finalValueAfterOperations = (array)=>array.reduce((count,curr) => curr[1] == "+" ? ++count : --count,0)
    