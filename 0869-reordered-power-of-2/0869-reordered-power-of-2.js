/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many - depend on your schedule, but I think the number isnt really important. Learning from the question youve solved is indeed more essential.
* 
*/



var reorderedPowerOf2 = function(num) {
    
    // since its a stringnum "01" stays as "01"
    // "01" doesnt equal "1"

    // the "512" in the loop will become "125" anyway
    let sortedStringNum = num.toString().split("").sort().join("")


    // the input num will not be greater than a billion
    for (let index = 0; index <= 30; index++) {

        index
        // 2^0 = 1,    2^1 = 2

        let pow2 = Math.pow(2, index) 
        let sortedPowerOf2= pow2.toString().split("").sort().join("")
    
        // compare as strings to keep "01" from becoming 1
        // if ("01" == "1") wont execute

        sortedPowerOf2
        sortedStringNum

        if (sortedPowerOf2 == sortedStringNum) {
            return true // can rearrange to a power of 2
        }
    }

    // no power of 2 found after 30 loops
    return false

}
console.log(reorderedPowerOf2(521), true, "reorder it to 512 which is 2^9")

// console.log(reorderedPowerOf2(1), true, "2^0 = 1")
// console.log(reorderedPowerOf2(10), false, "01 is not valid, but 1 is a power of two")