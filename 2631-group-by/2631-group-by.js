Array.prototype.groupBy = function(capitalTypeFn) {
    
    const groupByObj = {}

    for (const element of this) {
        
        // String(e) or Array(e)
        const currKey= capitalTypeFn(element)
        
        groupByObj[currKey]
        if (!groupByObj[currKey]){
            groupByObj[currKey] = []
        }        
        let duplicateArray = groupByObj[currKey]
        duplicateArray.push(element)
    }
    
    return groupByObj
}

const hi=[1,2,3]
hi.groupBy(String) // {"1":[1],"2":[2],"3":[3]}