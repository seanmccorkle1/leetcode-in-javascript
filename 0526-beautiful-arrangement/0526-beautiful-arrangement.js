

var countArrangement = function(inputNum) {
    
    inputNum
    let permutationCount = 0


    // the first element is one-indexed
    // basically ignore array[0] and add another number at the end to make up for it 
    
    const visitedArray = new Array(inputNum + 1).fill(false)
    


    var depthFirstSearch = currNum => {


        // currNum can only get here if it keeps hititng (notVisitedYet && isDivisibleByEither) 
        // go back to the call at line 41 with (currNum - 1)


        if (currNum > inputNum) {
            permutationCount +=1 
            return  "array found" 
        }


        // index <= num


        for (let index = 1; index <= inputNum; index++) {


            index
            
            visitedArray


            // avoid double counting
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


        return "end of for loop"
    }



    visitedArray
    permutationCount


    depthFirstSearch(1)


    visitedArray
    permutationCount


    return permutationCount
}


countArrangement(4)