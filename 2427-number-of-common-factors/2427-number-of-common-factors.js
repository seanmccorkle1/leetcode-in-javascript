/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many  -  depend on your schedule, but I think the number isnt really important. Learning from the question youve solved is indeed more essential.
* 
*/

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */


var commonFactors = function(num1, num2) {

    let factorCount = 1
    let index = 2

    // const lowestNum = (Math.min(num1, num2))

    num1
    num2

    const lowestNum = 

    Math.min(
        num1,  
        num2) 


    lowestNum


    let commonFactors = [1]
    let nonCommonFactors = [0]
    
    let quotient1 = 0
    let quotient2 = 0


    num1
    num2

    lowestNum
    
    // <= to get the last 12 as a factor 

    factorCount
    index
    
    lowestNum


    while (index <= lowestNum) {

        index

        const indexIsCommonFactor = ((num1 % index)== 0 && (num2 % index)== 0)

        if (indexIsCommonFactor) {

            factorCount++

            quotient1= num1 / index
            quotient2= num2/index

            index
            // commonFactors.push(`${index} is a factor of both ${quotient1} and ${quotient2}`)

            commonFactors.push(index)

            commonFactors
        }

        else if (!indexIsCommonFactor) {
            nonCommonFactors.push(index)

            quotient1 = num1 / index
            quotient2 = num2 / index

            nonCommonFactors.push(`${quotient1} and ${quotient2} are both not integers`)

            nonCommonFactors
        }

        index++
    }
    
    commonFactors
    commonFactors.length

    return factorCount
}

console.log(commonFactors(12,24), "[1, 2, 3, 4, 6, 12] are the 6 common factors of both nums")

// console.log(commonFactors(6, 1),   1,  "[1] is the only common factor, 6/1 and 1/1 are both integers")
// console.log(commonFactors(3, 12),   2, "1 and 3")