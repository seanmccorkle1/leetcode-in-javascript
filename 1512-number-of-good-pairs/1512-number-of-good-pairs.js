var numIdenticalPairs = function (array) {
    
    let count = 0
    const obj = {}
    
    for (let number of array){
        
        // let frequency = obj[number]
        const valueExists = obj[number] ? true : false
        
        obj
        
        if (valueExists) {
            
            count += obj[number] 
            
            // increment comes last
            obj[number] += 1 
            
        }
        
        else if (!valueExists) {
            obj[number] = 1
        }
    }
    
    obj
    return count
}

console.log(numIdenticalPairs([1,2,3,1,1,3]),   4, "(1, 1) (1, 1) (1, 1) and (3, 3)")