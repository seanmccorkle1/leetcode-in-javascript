/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the number isn't really important. Learning from the question you've solved is more important.
* 
*/

var countPrimes = function (num) {

    // this is the (inputNumber -= 1) part
    const array = new Uint8Array(num)
    let primeCount = 0


    // "strictly less than the input number"

    
    for (let index = 2; index < num; index++) {
        
        index

        // if its been seen before, its a multiple (ie. not a prime)
        // so dont increase primeCount
        
        // back to top, the number was already visited
        if (array[index] == 1) {
            continue 
        }
        
        // [2, 3, 5, 7, 11]
        primeCount += 1
    
        // mark every multiple of 2 up until 10, not including 10 itself
        // so [2,4,6,8]
        // then mark every multiple of 3
        
        // use mult += 2 to only mark the multiples of 2
        // mult++ would mark [2,3,4,5] without increasing primeCount

        // for multiples of 3, go straight to 9
        // 6 was already seen because its a multiple of 2

        // (let index = 0) only happens once, it doesnt refresh
        
        var power = Math.pow(index, 2)
        
        while (power < num){
            array[power] = 1   // mark the number as visited, "hot"
            power += index

            array
        }
    }
    array

    return primeCount
}

console.log(countPrimes(10), 4, " [2, 3, 5, 7], 4 primes")
// console.log(countPrimes(12), 5, "[2, 3, 5, 7, 11] - 5 numbers")

// console.log(countPrimes(32), 11, "11 primes")
// console.log(countPrimes(5), 2, "[2,3]")