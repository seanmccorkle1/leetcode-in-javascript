var countArrangement = function(num) {

    if (num <= 2) {
        return num
    }
    
    // array[3] is valid because it breaks at GREATER than 3, not equal to 3
    // so there needs to be a fourth element
    const visitedArray = Array(num + 1).fill(false)
    
    let permutationCount = 0

    var dfsFn = (element) => {

        // if it made it here, it means all numbers in [1,2,3] are valid
        if (element > num) {
            permutationCount += 1
            return // base case
        }

        // dfs(1) gets pushed to the bottom of the call stack at index = 1 in the for loop
        // so it still has to loop 2 more times to get all the permutations


        for (let index = 1; index <= num; index++) {

            visitedArray
            index

            // avoid double counting
            
            const alreadyVisited = visitedArray[index]
            const isDivisible=  index % element === 0 || element % index === 0
            
            if (!alreadyVisited && isDivisible) {
                
                visitedArray[index] = true
                dfsFn(element + 1)
                visitedArray[index] = false

                visitedArray
            }
            
            visitedArray
        } // end for loop

        return
    }

    visitedArray

    dfsFn(1)
    return permutationCount
}

console.log(countArrangement(3), 3, "[1,2,3] [3,2,1] [2,1,3]")
// console.log(countArrangement(2), 2, "[1, 2] and [2, 1]")