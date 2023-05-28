/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val) {
    
    const toBe = (compair) => {

        const err= new Error("Not Equal")
        
        if (val === compair){
            return true
        } 
        
        else {
            throw err
        }
    }

    const notToBe= compair => {        
        
        if (val !== compair){
            return true
        }
        
        else {
            throw new Error("Equal")
        }
    }
    
    return {toBe, notToBe}
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */