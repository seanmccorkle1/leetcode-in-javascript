var countPrimes = function (inputNum) {

    // this is the (inputNumber -= 1) part
    const array = new Uint8Array(inputNum)
    let primeCount = 0


    // "strictly less than the input number"

    
    for (let increment = 2; increment < inputNum; increment++) {
        
        increment

        // if its been seen before, its a multiple (ie. not a prime)
        // so dont increase primeCount

        if (array[increment] == 1) {
            continue // back to top
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
        
        var power = Math.pow(increment, 2)
        
        while (power < inputNum){
            array[power] = 1   // mark the number as visited, "hot"
            power += increment

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