

var subArrayRanges = function (array) {

    // init numbers to 0
    let sum = 0

    array
    
    
    for (let index = 0; index < array.length; index++) {

        index

        let min = array[index] // start at the same number
        let max = array[index]

        index

        for (let index2 = index; index2 < array.length; index2++) { 

            let num = array[index2]

            index
            index2
            
            // use `min` in both the left and right to keep the lowest number found
            
            min = 
                Math.min(
                    min, 
                    num)

            max = 
                Math.max(
                    max,
                    num)

            let range = max - min
            sum += range   // sum of "subarray" ranges
            sum
        } 
    }

    return sum
}

console.log(subArrayRanges([1, 2, 3]),   4)