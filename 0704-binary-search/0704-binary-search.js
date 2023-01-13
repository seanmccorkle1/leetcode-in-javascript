var search = function(array, target) {

    let left = 0
    let right = array.length-1

    while (left < right) {

        // let mid =  Math.floor(((right - left) + 1) / 2)

        let distance = (right - left) + 1
        let mid = Math.floor(distance / 2) + left

        const midNum = array[mid]

        if (target < midNum) {
            right = mid - 1
        } 
        
        else if (target >= midNum) {
            left = mid 
        }
    }
    return array[left]==target ? left : -1
}

console.log(search([-1,0,3,5,9,12], 9), 4)