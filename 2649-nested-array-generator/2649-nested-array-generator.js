/**
 * @param {Array} arr
 * @return {Generator}
 */

function* inorderTraversal(array) {    
    
    for (const element of array) {
        
        if (typeof element == "object") {
            var functionPointer =inorderTraversal(element) 
            yield* functionPointer
        } 
        
        else {
            yield element
        }
    }
}

const gen = inorderTraversal([1, [2, 3]])
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
