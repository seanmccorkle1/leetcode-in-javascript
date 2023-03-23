var threeSumClosest = function (array, target) {
    // start it at "not close at all"
    let closest = Infinity

    array = array.sort((a, b) => a - b)
    array


    for (let index = 0; index < array.length - 2; index++) {

        let leftIndex = index + 1
        let rightIndex = array.length - 1
    

        index
        leftIndex
        rightIndex

        while (leftIndex < rightIndex) {

            let localThreeSum = array[index] + array[leftIndex] + array[rightIndex]

            localThreeSum
            closest
            target

            let currDistance= Math.abs(localThreeSum - target)
            let closestDistance= Math.abs(closest - target)


            closestDistance
            closest


            if (currDistance < closestDistance) {
                closest = localThreeSum
            }

            
            if (localThreeSum > target) {
                rightIndex--
            } 

            else if (localThreeSum <= target) {
                leftIndex++
            }
        }
    }

    return closest
}

console.log(threeSumClosest([3, 2, 1, 5, 4, 1, 40], 5), "{result here}")