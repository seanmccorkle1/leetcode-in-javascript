var threeSum = function(array) {

    const threeSumArray = []

    // sort first
    array = array.sort((a, b) => a - b)

    outerFrontIndexLoop:

    for (let frontIndex = 0; frontIndex < array.length; frontIndex += 1) {

        frontIndex
        array

        const currNum = array[frontIndex]
        const prevNum = array[frontIndex - 1]

        // if the number at frontIndex is positive, 
        // then at best the returned array can be [1,1,1] because of the ascending sort

        // the three-sum of at least (1+1+1) cannot go down to 0
    
        if (currNum >= 1) {
            break outerFrontIndexLoop
        } 

        // First loop: [-6, -5, X, X, X]
        // [-6, -5] is [prev, curr]

        // Second loop: [ X, -5, -5, X, X]
        // [-5, -5] is [prev, curr] now

        // getting 2 equal numbers right next to each other
        // means that that three-sum has already been done in the loop before

        if (frontIndex >= 1 && prevNum === currNum) {
            continue outerFrontIndexLoop
        }

        // increment `midIndex` up while `frontIndex` and `backIndex` are anchored to their positions. 
        // decrement `backIndex` by 1 for each pass through the array

        let midIndex = frontIndex + 1
		let backIndex = array.length - 1    

        // `frontIndex` is controlled by by the outer for-loop and will move the slowest.
        // once `midIndex` and `backIndex` collide, `frontIndex` will be incremented up

        // loop 1: [-6, -5, X, 10]
        // loop 2: [-6, X, -4, 10] - three sum            
        // loop 3: [X, -5, -4, 10]
        
    
        // dont look at the same number

        while (midIndex < backIndex) {
            frontIndex
            midIndex
            backIndex

            // Array is [-6, -5, -5, -4, 10]

            // loop 1: [ -6, -5, X, X, 10] 
            // loop 2: [ -6, X, -5, X, 10] 
            // loop 3: [ -6, X, X, -4, 10]  - three sum, collision, move frontIndex up 
            // loop 4: [ X, -5, -5, X, 10]  - three sum
            // loop 5: [ X, -5 (prev), -5 (curr), X, 10] - 
            
            
            // loop 5 is a repeat of the last loop, curr and prev are the same, continue
            // after loop 5(index < array.length - 2) isnt true in the outer loop, break everything
            let nextMidNum = array[midIndex + 1]
            let prevRightNum = array[backIndex -  1]

            
            let frontNum = array[frontIndex]
            let midNum = array[midIndex]
            let rightNum = array[backIndex]

            // After [-4, 0, 4] go straight to [-4, 1, 3] by moving BOTH indexes 
            // If you only move one index like [-4, 0, X]
            // there wont be another answer thats NOT X = 4 to sum it exactly to 0.

            let threeSum = frontNum + midNum + rightNum    

            if (threeSum === 0) {
                
                frontNum
                midNum
                rightNum
                
                threeSumArray.push([frontNum, midNum, rightNum])
                threeSumArray

                // continue to do midIndex += 1 and backIndex -= 1
                // as long as those values are duplicates

                midIndex

                if (midNum === nextMidNum){

                    midNum
                    nextMidNum
                    
                    skipMidDuplicates:
                    while (array[midIndex] === array[midIndex + 1]) { 
                        midIndex += 1
                }
            }
                
                // skip values that have already been seen, 
                // otherwise, [-2,0,0,2,2] would result in [[-2,0,2], [-2,0,2]]

                if (array[backIndex] == array[backIndex - 1]){

                    skipBackDuplicates:
                    while (array[backIndex] === array[backIndex - 1]) {
                        backIndex -= 1
                    }    
                }

                // if the three-sum is found, move BOTH indexes
                // and dont do the other if statements

                midIndex += 1
				backIndex -= 1
			}

            // if the sum is too low, move `midIndex` to the right to get a higher number 

            else if (threeSum < 0) {
				midIndex += 1
			}

            // if the sum is too high, decrement `backIndex` to get a lower number
            else if (threeSum > 0) { 
                backIndex -= 1
            }
        } // end while, go back to the for loop
	}

    return threeSumArray
}

console.log(threeSum([-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]) ,"need [-4, 1, 3]")


// console.log(threeSum([-6, -5, -4, 10]), "output: only [[-6, -4, 10]]")

// console.log(threeSum([-6, -5, -5, -4, 10 ]), "output: [[-6, -4, 10] AND [-5, -5, 10]]")
// console.log(threeSum([-5, -5, -5, 10, 10, 10]), "output: [[-5, -5, 10]]")

// console.log(threeSum([-11, -10, -2, -1, 12]), `[[-10, -2, +12] and [-11, -1, +12]]`)
// console.log(threeSum([-3, -4, 7, -3, -4, 7]), "[-4, -3, 7] is the only unique three-sum")