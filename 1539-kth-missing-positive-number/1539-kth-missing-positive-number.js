
var findKthPositive = function (array, kthMissingNum) {

    array
    
    let firstNum = array[0]
    
    if (firstNum != 1) {

        const simpleArray = Array.from({length: firstNum - 1}, (u, index) => index + 1)

        simpleArray
        array

        array = [...simpleArray, ...array]
        
        kthMissingNum

        
        // const from1Array = Array.from({length: })
        

        const missingNumAlreadyFound = (kthMissingNum - simpleArray.length) <= 0 ? true : false

        // in this case the 2nd missing num is simply 2
        // "k" and "kth" doesnt start from 0 like arrays do 

        if (missingNumAlreadyFound) {
            return kthMissingNum
        }

        simpleArray
        kthMissingNum

        // at the end even if its not a loop
        kthMissingNum -= simpleArray.length
    }

    kthMissingNum

    for (let index = 1; index < array.length; index += 1) {

        let leftNum = array[index - 1]
        let rightNum = array[index]

        const amountOfMissingNums = (rightNum - leftNum) - 1

        kthMissingNum

        if ((kthMissingNum - amountOfMissingNums) <= 0) {
            return leftNum + kthMissingNum
        }

        kthMissingNum -= amountOfMissingNums
    }

    return array.at(-1) + kthMissingNum
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5), 9, "[1, 5, 6, 8, 9, 10] are the missing numbers, 9 is the fifth missing")

// console.log(findKthPositive([100, 112, 115], 16), 16, "16th missing is 16")
// console.log(findKthPositive([1, 2, 3, 5], 2) , 6, "[4, 6] are the 2 missing nums, 6 is the second missing") 
// console.log(findKthPositive([5, 6, 7], 3), 3, "[1,2,3,4,5,6] should be the real array, 3 is the 3rd missing from 1")
