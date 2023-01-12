/**
 * 
 * @function
 * @return
 * 
 */


// The total number is equal to amountOfPrimes! * amountOfComposites!, so we go through and do that.
// Keep track of the total and multiply by it each time we increment ends up reaching that value.

// Slight tangent from me, but result should be a key word
// And if you don't put a return statement result will be returned

// In strongly typed languages it works even betters
// You wouldn't even need to initialize

// The highest value of n is 100, so all primes less than that
// It is pretty easy to do a function that creates this set, this can be an exercise for the reader
// Hint: all primes are 1 more or less than a multiple of 6, except 2 and 3


var numPrimeArrangements = function (num) {

    const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])

    const mod = (Math.pow(10, 9)) + 7

    let primeCount = 0

    // 1 is a non-prime and youre starting from index 2
    let nonPrimeCount = 1

    let result = 1   // 1 because multiplying

    // If it is prime you multiply by the amount of primes 
    // after incrementing that amount

    // If it is composite you multiply by the amount of composites 
    // after incrementing that amount

    // The result of that is primes! * composites!,
    // Which is the number of permutations

    // [2, 3, 5, 7] are all prime

    for (let index = 2; index <= num; index++) {

        index
        result

        if (primeSet.has(index)) {
            
            result
            primeCount += 1
            result *= primeCount

            // result *= ++primes
        }

        else if (!primeSet.has(index)) {
            result
            nonPrimeCount += 1
            result *= nonPrimeCount

            // result *= ++nonPrimes
        }
        result
        result %= mod
        result
    }

    return result
}

console.log(numPrimeArrangements(5), 12, "[1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1")

// console.log(numPrimeArrangements(1), 1)
// console.log(numPrimeArrangements(2), 1)
// console.log(numPrimeArrangements(3), 2)