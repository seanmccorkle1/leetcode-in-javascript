Array.prototype.groupBy = function(capitalTypeFn) {
    
    const obj = {}
    
    for (const element of this) {
        
        // String(e) or Array(e)
        const key = capitalTypeFn(element)
        
        if (!obj[key]){
            obj[key] = []
        }
        
        let duplicateArray = obj[key]
        duplicateArray.push(element)    
    }
    
    return obj
}

const a=[1,2,3]
a.groupBy(String) // {"1":[1],"2":[2],"3":[3]}