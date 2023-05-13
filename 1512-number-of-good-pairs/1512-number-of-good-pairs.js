var numIdenticalPairs = function (array) {

    const map = new Map()
    let count = 0

    for (let number of array){ 
        
        const valueExists = map[number] ? true : false
        
        if (valueExists) {
            count += map[number]
            map[number] += 1
            
            map
        }
        
        else if (!valueExists) {            
            map[number] = 1
            map
        }
    }
    map        

    return count
    
}

console.log(numIdenticalPairs([1,2,3,1,1,3]),   4, "(1, 1) (1, 1) (1, 1) and (3, 3)")
