var numPrimeArrangements = function (n) {

    //The highest value of n is 100, so all primes less than that
    //It is pretty easy to do a function that creates this set, this can be an exercise for the reader
    //Hint: all primes are 1 more or less than a multiple of 6, except 2 and 3

    const primeSet = new Set([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]);

    const mod = Math.pow(10, 9) + 7

    // total number of each
    let primes = 0 
    let nonPrimes = 0
    
    let out = 1    
    
    for (let i = 1; i <= n; i++) {

        //If it is prime you multiply by the amount of primes 
        //after incrementing that amount

        //If it is composite you multiply by the amount of composites 
        //after incrementing that amount

        //The result of that is primes! * composites!,
        //Which is the number of permutations
        if (primeSet.has(i))
            out *= ++primes;
        else 
            out *= ++nonPrimes;
        out = out % mod;
    }

    return out;

    //Slight tangent from me, but out should be a key word
    //And if you don't put a return statement out will be returned
    //In strongly typed languages it works even betters
    //You wouldn't even need to initialize
};