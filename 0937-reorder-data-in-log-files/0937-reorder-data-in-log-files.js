/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is stringA good strategy. How many - depend on your schedule, but I think the number isn't really important. Learning from the question you've solved is indeed more essential.
* 
* @params 
* @return 
* @explain 
*/


    const getBody = string => {
        let bodyIndex = string.indexOf(" ")
        return string.slice(bodyIndex + 1)
    }

    const bodyContainsDigitFn = string => {
        return string.match(/[\d]/g)
    }


    const weirdSort = (stringA, stringB) => {

        // it uses getBody(string), so getBody function has to come first
        
        let bodyA = getBody(stringA)
        let bodyB = getBody(stringB)

        // if the BODIES are the exact same,
        // compare in ascending order using the original string

        if (bodyA == bodyB){
            let wholeCompareNum = stringA.localeCompare(stringB)
            return wholeCompareNum
        }

        else if (bodyA != bodyB) {
            let bodyCompareNum = bodyA.localeCompare(bodyB)
            return bodyCompareNum
        }
    }

    var reorderLogFiles = function (array) {
        let digitArray = []
        let stringArray = []


        for (const wholeString of array) {

            let body = getBody(wholeString)
            const bodyContainsDigit = bodyContainsDigitFn(body)

            wholeString
            body

            // they all have digits, but the letter-logs have no digits in their body
            // if theres no digit, its stringA letter-log

            // ex. dig1 8 1 5 1

            if (bodyContainsDigit) {
                digitArray.push(wholeString)
            }

            // ex. let1 art can
            else if (!bodyContainsDigit) {
                stringArray.push(wholeString)
            }

        }

        stringArray
        stringArray.sort(weirdSort)

        stringArray

        return [...stringArray, ...digitArray]

    }



    // stringArray.sort((stringA, stringB) => {

    //     let bodyA = getBody(stringA)
    //     let bodyB = getBody(stringB)

    //     // if the BODIES are the exact same,
    //     // compare in ascending order using the original string

    //     if (bodyA == bodyB){
    //         let wholeCompareNum = stringA.localeCompare(stringB)
    //         return wholeCompareNum
    //     }

    //     else {
    //         let bodyCompareNum = bodyA.localeCompare(bodyB)
    //         return bodyCompareNum
    //     }

        // if (bodyCompareNum === -1){
        //     return -1
        // }

        // else if (getBody(stringA).localeCompare(getBody(stringB)) > 0) {
        //     return 1
        // }

        // else if (bodyA == bodyB) {
        //     return stringA.localeCompare(stringB)
        // }
    
console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","a3 art can"]), 
[ 'a3 art can', 'let1 art can', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6' ])