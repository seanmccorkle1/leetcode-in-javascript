var isEmpty = function(obj) {
 
    if (Array.isArray(obj)){
        if (obj.length == 0){
            return true
        }
        return false
    }
    
    return Object.entries(obj).length == 0 ? true : false
}