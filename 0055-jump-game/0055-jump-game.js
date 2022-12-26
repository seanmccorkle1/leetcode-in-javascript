var canJump = function(array) {
    let index = 0
    let max = 0

    let lastIndex = array.length - 1

    lastIndex

    
    while (index < array.length) {

        let num = array[index]

        index
        index + array[index]

        max = Math.max(max, index + num)
        
        max


        if (max >= lastIndex) {
            return true
        }

        
        // got a 0 and it didnt make it to the end

        if (max <= index && num == 0) {
            break
        }

        index++
    }

    return false

}

console.log(canJump([2,3,1,1,4]), true, "1 step to 3 and end at the last element")