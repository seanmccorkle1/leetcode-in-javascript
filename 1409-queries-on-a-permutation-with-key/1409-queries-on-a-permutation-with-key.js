var processQueries = function (queries, m) {
    
    let resultArray = []
    let array = Array.from({length: m}, (u, index)=> ++index)

    // for(let index = 1; index <= m; index++){
    //     array.push(index)
    // }

    array

    for(const num of queries){
        let indexOfNum = array.indexOf(num)
        resultArray.push(indexOfNum)
        // array = array.splice(index, 1).concat(array)

        array.splice(indexOfNum, 1)
        array.unshift(num)
    }
    
    return resultArray
}

console.log(processQueries([3,1,2,1],  5), [2, 1, 2, 1])