var hammingWeight= function (unsignedBinary) {
    
    let numOfOnes = 0


    while (unsignedBinary != 0) {

        // 8 & 1 = 0 
        // same as (1000 & 1) 
        // rightmost bit is 0 which makes it return 0


        // 7 & 1 = 1
        const rightmostBit = unsignedBinary & 1

        if (rightmostBit == 1){
            numOfOnes += 1
        }

        // unsigned bitshifts use 3 arrows >>> 
        // think of signed as normal so it only uses 2 arrows (>>)

        unsignedBinary        
        unsignedBinary = unsignedBinary >>> 1
    }

    return numOfOnes
}

console.log(hammingWeight(00000000000000000000000000001011), 3, "three 1's") 