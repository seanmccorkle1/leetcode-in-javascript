Array.prototype.groupBy = function(typeFn) {    
    
    const obj = {}
    
    for (const e of this) {     
        
        // the key is String(e) or Array(e)        
        const key = typeFn(e)
        
        if (!obj[key]){
            obj[key] = []
        }
        
        let array=obj[key]
        array.push(e)
    }
    return obj
}

const a=[1,2,3]
a.groupBy(String) // {"1":[1],"2":[2],"3":[3]}