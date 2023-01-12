/**
 * 
 * @function
 * @return
 * 
 */

/**
[1,2,3,4]
The array should be multiplication of all values except the index that we are currenty on:
[2x3x4 (not 1), 
1x3x4 (not 2), 
1x2x4 (not 3), 
1x2x3  (not 4)] = [24, 12, 8 , 6]

In this problem, if division was allowed:
1. We run a loop on array and get 1x2x3x4 = 24.
2. we run another array, and for each index:
  24/1 = 24
  24/2 = 12
  24/3 = 8
  24/4 = 6
------------------------------------------------
Without division:

we create 2 arrays:

1 array with incremental multiplication from left, 1 array with incremental multiplication from right.

at the start index of these arrays, we'll have 1 (as no multiplication prior to it).

left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]

right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

now, at each index, in left array, we'll have mutiple of left elements prior that index.

In right array, we'll have mutiple of right elements ahead of that index.
So, we'll multiply [1, 1, 2, 6] X  [24, 12, 4, 1] at each index.

result = [24, 12, 8, 6]
1 array 
*/

var productExceptSelf = function (array) {

    const leftArray = []
    let leftProduct = 1

    for (let index = 0; index < array.length; index++) {

        leftArray[index] = leftProduct

        // the real array[0] is 2  ([2, 2])
        // but leftArray = [1, 2]

        leftProduct *= array[index]
        leftArray
    }

    const rightArray = []

    let runningProduct = 1

    let backIndex = array.length - 1

    // leftArray's element is one behind the backIndex
    // rightArray's lemeent is one ahead the backIndex

    while (backIndex >= 0) {

        runningProduct

        rightArray[backIndex] = runningProduct
        rightArray

        runningProduct *= array[backIndex]        

        // every number is in the product except 4 for 6 (1x2x3)

        // the back is where leftArray dominates
        // the front is where rightArray dominates

        rightArray[backIndex] *= leftArray[backIndex]

        leftArray
        rightArray

        backIndex -= 1
    }

    return rightArray
}

console.log(productExceptSelf([1,2,3,4]),   [24, 12, 8, 6])
// console.log(productExceptSelf([2, 2]), [2,2])