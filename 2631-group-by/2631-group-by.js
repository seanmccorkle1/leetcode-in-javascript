Array.prototype.groupBy = function(fn) {    
    
    const obj = {}
    
    for (const e of this) {     
        
        const key = fn(e)
        
        if (!obj[key]){
            obj[key] = []
        }
        let array=obj[key]
        array.push(e)
    }
    return obj
}

// [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
