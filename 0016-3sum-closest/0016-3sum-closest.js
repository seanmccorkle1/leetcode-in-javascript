var threeSumClosest = function (array, targetNum) {

    let closestDistanceToTargetNum = Infinity

    array
    array.sort((a, b) => a - b)

    for (let index = 0; index < array.length - 2; index++) {

        let leftIndex = index + 1
        let rightIndex = array.length - 1

        index
        leftIndex
        rightIndex

        // cant use the same-position number twice in the three-sum
        // so dont look at the same final element

        while (leftIndex < rightIndex) {

            let num1 = array[leftIndex]
            let num2 = array[index]
            let num3 = array[rightIndex]

            const currThreeSum = num1 + num2+num3
            const currDistance = Math.abs(targetNum - currThreeSum)

            if (currDistance < closestDistanceToTargetNum){
                closestDistanceToTargetNum = currDistance
                closestThreeSum = currThreeSum
            }

            if (currThreeSum == targetNum) {

                currThreeSum
                targetNum

                return currThreeSum
            }

            else if (currThreeSum < targetNum) {
                leftIndex++
            }

            else if (currThreeSum > targetNum){
                rightIndex--
            }

        }

    }

    return closestThreeSum
}

console.log(threeSumClosest([3, 2, 1, 5, 4, 1, 40], 5), 5, "[3, 1, 1] is 5, the exact target num was found") 
console.log(threeSumClosest([-1, 2, 1, -4], 1), 2, "[-1, 2, 1] = 2 and is the closest possible sum to target 1")