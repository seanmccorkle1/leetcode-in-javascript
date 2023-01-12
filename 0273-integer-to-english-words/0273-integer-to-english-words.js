/**
 * 
 * @function
 * @return
 * 
 */


var numberToWords = function (num) {

    const numsWithWordsArray = [
        [1000000000, 'Billion'],
        [1000000, 'Million'],
        [1000, 'Thousand'],
        [100, 'Hundred'],
        [90, 'Ninety'],
        [80, 'Eighty'],
        [70, 'Seventy'],
        [60, 'Sixty'],
        [50, 'Fifty'],
        [40, 'Forty'],
        [30, 'Thirty'],
        [20, 'Twenty'],
        [19, 'Nineteen'],
        [18, 'Eighteen'],
        [17, 'Seventeen'],
        [16, 'Sixteen'],
        [15, 'Fifteen'],
        [14, 'Fourteen'],
        [13, 'Thirteen'],
        [12, 'Twelve'],
        [11, 'Eleven'],
        [10, 'Ten'],
        [9, 'Nine'],
        [8, 'Eight'],
        [7, 'Seven'],
        [6, 'Six'],
        [5, 'Five'],
        [4, 'Four'],
        [3, 'Three'],
        [2, 'Two'],
        [1, 'One'],
        [0, "Zero"]
    ]

    const wordMap = new Map(numsWithWordsArray)
    const stringArray = []


    // wordsMap has every exact number from [0, ..., 20] 
    if (num <= 20) {
        return wordMap.get(num)
    }

    for (const [value, word] of wordMap) {

        value
        word

        const multiplier = Math.trunc(num / value)
        const negCheck = num - value

        if (negCheck <= -1) {
            continue
        }

        if (num <= 0) {
            break
        }

        value
        multiplier

        num -= (value * multiplier)
        num

        if (multiplier == 1 && value >= 100) {
            stringArray.push("One", word)
            stringArray
            continue
        } 
        
        else if (multiplier == 1 && value <= 99) {
            stringArray.push(word)
            stringArray
            continue
        } 
        
        else {
            const singleDigitWord = numberToWords(multiplier)

            stringArray.push(singleDigitWord, word)
            stringArray
        }
    }

    stringArray
    return stringArray.join(" ")
}


// console.log(numberToWords(123), "One Hundred Twenty Three")
// console.log(numberToWords(223), "Two Hundred Twenty Three")

// console.log(numberToWords(208), "Two Hundred Eight")

// console.log(numberToWords(1000023), "One Million")
// console.log(numberToWords(2000023), "Two Million")

// console.log(numberToWords(12), "Twelve")
// console.log(numberToWords(0), "Zero")