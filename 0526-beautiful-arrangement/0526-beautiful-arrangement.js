/**
 *
 * @param {number} inputNum
 * @return {number[]} array
 *
 * @function patternMatch(["abba", ["dog", "cat", "dog", "rocketship"])
 * @return false
 * 
 * @explain
 */


var countArrangement = function(inputNum) {
    
    inputNum

    // array[3] is valid because it breaks at GREATER than 3, not equal to 3
    // so there needs to be a fourth currNum

    const visitedArray = Array(inputNum + 1).fill(false)

    visitedArray

    let permutationCount = 0


    var depthFirstSearch = currNum => {
        
        // it can only get here if it repeatedly hits (notVisitedYet && isDivisibleByEither)
        
        if (currNum > inputNum) {
            permutationCount++
            return  // start from beginning of call stack
        }

        // DFS(1) gets pushed to the bottom of the call stack at index = 1 in the for loop
        // so it still has to loop 2 more times to get all the permutations

        // index <= num

        for (let index = 1; index <= inputNum; index++) {

            index

            // avoid double counting

            visitedArray
                         
            const notVisitedYet = visitedArray[index] == false
            const isDivisibleByEither = (currNum % index == 0) || (index % currNum == 0)

            if (notVisitedYet && isDivisibleByEither) {

                visitedArray[index] = true
                visitedArray

                depthFirstSearch(currNum + 1)

                visitedArray[index] = false
                visitedArray
            }
            
            visitedArray
        }

        return
    }


    visitedArray
    permutationCount


    depthFirstSearch(1)

    permutationCount
    return permutationCount
}

console.log(countArrangement(2), 2, "[1, 2] and [2, 1] are the two arrangements")

// console.log(countArrangement(3), 3, "[1,2,3] [3,2,1] [2,1,3]",   
// "[2 (i1), 1 (i2), 3 (i3)]  [(2 % (i)1 == 0), ( (i)2 % 1 == 0), (3 % i3 == 0)], 3 beautiful arrays")

// console.log(countArrangement(4), 8)