var threeSumClosest = function (array, targetNum) {

    // start it at "not close at all"
    let closestThreeSum = Infinity

    array = array.sort((a, b) => a - b)
    array


    for (let index = 0; index < array.length - 2; index++) {

        let leftIndex = index + 1
        let rightIndex = array.length - 1

        // cant use the same-position number twice in the three-sum
        // so dont look at the same final element

        index
        leftIndex
        rightIndex

        while (leftIndex < rightIndex) {

            let num1 = array[leftIndex]
            let num2 = array[index]
            let num3 = array[rightIndex]

            // -3 is just more negative so it whens the < condition
            // its not closer to the target

            let localThreeSum = num1 + num2 + num3

            localThreeSum
            closestThreeSum
            targetNum

            let currDistance = Math.abs(localThreeSum - targetNum)
            let closestDistance = Math.abs(closestThreeSum - targetNum)

            currDistance

            closestDistance
            closestThreeSum

            if (currDistance < closestDistance) {
                closestThreeSum = localThreeSum
            }

            if (localThreeSum > targetNum) {
                rightIndex--
            } 
            
            else if (localThreeSum < targetNum) {
                leftIndex++
            }
            else if (localThreeSum == targetNum){
                return localThreeSum||targetNum
            }

        }
    }

    return closestThreeSum
}

console.log(threeSumClosest([3, 2, 1, 5, 4, 1, 40], 5), 5, `[1, 1, 3] is 5, the exact target num was found`)
// console.log(threeSumClosest([-1, 2, 1, -4], 1),  2, "[-1, 2, 1] =  2 and is the closest possible sum to target 1")