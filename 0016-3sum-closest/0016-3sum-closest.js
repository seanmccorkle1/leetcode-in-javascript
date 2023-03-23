var threeSumClosest = function (array, target) {

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

            // Math.abs(localSum - target)
            // Math.abs(closest - target)

            if (Math.abs(localSum - target) < Math.abs(closest - target)) {
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