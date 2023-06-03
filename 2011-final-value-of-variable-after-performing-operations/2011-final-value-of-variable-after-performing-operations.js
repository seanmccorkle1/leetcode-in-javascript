const finalValueAfterOperations = (array)=>array.reduce((count, string) => string[1] == "+" ? ++count : --count,0)
    