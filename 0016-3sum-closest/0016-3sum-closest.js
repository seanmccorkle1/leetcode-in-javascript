var threeSumClosest = function (array, targetNum) {
    // start it at "not close at all"
    let closestThreeSum = Infinity

    array = array.sort((a, b) => a - b)
    array


    for (let index = 0; index < array.length - 2; index++) {

        let leftIndex = index + 1
        let rightIndex = array.length - 1

        index
        leftIndex
        rightIndex

        while (leftIndex < rightIndex) {

            let num1=array[leftIndex]
            let num2 = array[index]
            let num3 = array[rightIndex]

            // -3 is just more negative so it whens the < condition
            // its not closer to the target

            let localThreeSum =num1+num2+num3 
            
            // early return
            if (localThreeSum == targetNum){
                return targetNum
            }

            localThreeSum
            closestThreeSum
            targetNum

            let currDistance = Math.abs(localThreeSum - targetNum)
            let closestDistance= Math.abs(closestThreeSum - targetNum)

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
            
        }
    }
    
    return closestThreeSum
}

// console.log(threeSumClosest([3, 2, 1, 5, 4, 1, 40], 5), "{result here}")
console.log(threeSumClosest([-1, 2, 1, -4], 1), 2)