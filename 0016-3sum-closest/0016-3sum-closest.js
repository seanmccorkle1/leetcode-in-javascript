var threeSumClosest = function (array, target) {
    // start it at "not close at all"
    let closest = Infinity

    array = array.sort((a, b) => a - b)
    array


    for (let index = 0; index < array.length - 2; index++) {

        let leftIndex = index + 1
        let rightIndex = array.length - 1

        while (leftIndex < rightIndex) {

            let localSum = array[index] + array[leftIndex] + array[rightIndex]

            localSum
            closest
            target

            let currDistance= Math.abs(localSum - target)
            let closestDistance= Math.abs(closest - target)


            closestDistance
            closest

            
            if (currDistance < closestDistance) {
                closest = localSum
            }
            
            if (localSum > target) {
                rightIndex--
            } 

            else if (localSum <= target) {
                leftIndex++
            }
        }
    }

    return closest
}

console.log(threeSumClosest([3, 2, 1, 5, 4, 1, 40], 5), "{result here}")