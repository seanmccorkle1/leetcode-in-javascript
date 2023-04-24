/**
 * @param {Array} arr
 * @return {Generator}
 */

function* inorderTraversal(array) {    

    for (const element of array) {
        
        if (typeof element == "object") {
            yield* inorderTraversal(element)
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
