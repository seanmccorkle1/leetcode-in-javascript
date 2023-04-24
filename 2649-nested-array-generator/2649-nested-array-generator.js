/**
 * @param {Array} arr
 * @return {Generator}
 */

var inorderTraversal = function*(arr) {
    
    for (let element of arr) {
    
        
        if (typeof element == "object") {
            yield* inorderTraversal(element)
        } 
        
        else {
            yield element;
        }
    }
}

const gen = inorderTraversal([1, [2, 3]])

gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
