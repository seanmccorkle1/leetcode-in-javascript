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
    
    array.sort((a,b) => obj[b] - obj[a] || a - b)
    return array[0]
}

mostFrequentEven([8154,9139,8194,3346,5450,9190,133,8239,4606,8671,8412,6290]) // 3346

// mostFrequentEven([0,1,2,2,4,4,1])  // 2
// mostFrequentEven ([29,47,21,41,13,37,25,7]) // -1