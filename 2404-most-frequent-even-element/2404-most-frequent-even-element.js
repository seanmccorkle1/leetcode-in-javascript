var mostFrequentEven = function(array) {

    const obj = {}
    array = array.filter(n =>n%2==0)

    if (array.length == 0){
        return -1
    }

    for (let num of array){
        obj[num] ? obj[num]++ : obj[num] = 1
    }

    obj
    array
    Object.entries(obj)
    
    console.log(array)
    console.log(obj)    
    
    
    // sort by descending frequency
    // then, if its tied, the lower number should come first
    
    array.sort((a,b) => (obj[b] - obj[a]) || (a - b) )
    
    return array[0]
}


// mostFrequentEven([0,1,4,4,2,2,1])  // 2  | 2 is lower
// mostFrequentEven ([29,47,21,41,13,37,25,7]) // -1