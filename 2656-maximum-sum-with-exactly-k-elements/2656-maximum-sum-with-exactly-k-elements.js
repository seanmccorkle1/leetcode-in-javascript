var maximizeSum = function(array, k) {

    let max = Math.max(...array)
    k

    let sum = 0
    let increment = 0

    while (k >= 1){

        sum += max + increment
        
        increment++
        k--
    }

    return sum
}

console.log(maximizeSum([1,2,3,4,5], 3), 18)
console.log(maximizeSum([1,2,3,4,5], 4), 26)