var numberToWords = function (num) {
    
    const numsWithWordsArray = [[1000000000, 'Billion'], [1000000, 'Million'], [1000, 'Thousand'], [100, 'Hundred'], [90, 'Ninety'], [80, 'Eighty'], [70, 'Seventy'], [60, 'Sixty'], [50, 'Fifty'], [40, 'Forty'], [30, 'Thirty'], [20, 'Twenty'], [19, 'Nineteen'], [18, 'Eighteen'], [17, 'Seventeen'], [16, 'Sixteen'], [15, 'Fifteen'], [14, 'Fourteen'], [13, 'Thirteen'], [12, 'Twelve'], [11, 'Eleven'], [10, 'Ten'], [9, 'Nine'], [8, 'Eight'], [7, 'Seven'], [6, 'Six'], [5, 'Five'], [4, 'Four'], [3, 'Three'], [2, 'Two'], [1, 'One'], [0, "Zero"]]
    
    const wordMap = new Map(numsWithWordsArray)
    const resultArray = []
    
    if (num <= 20){
        return wordMap.get(num)
    }
    
    //     if (num == 0) {
    //         return "Zero"
    //     }

    //     if (num <= 20) {
    //         let numAsWord = wordMap.get(num)
    //         return numAsWord
    //     }

    
    for (let [value, english] of wordMap) {

        value
        english

        const times = Math.floor(num / value)

        if (times == 0) {
            continue
        }

        if (num == 0) {
            continue
        }

        num -= (times * value)

        if (times == 1 && value >= 100) {
            resultArray.push("One", english)
            continue // top
        }

        if (times == 1) {
            resultArray.push(english)
            continue
        }

        resultArray.push(numberToWords(times), english)
        resultArray
    }

    resultArray
    return resultArray.join(" ")
}

// console.log(numberToWords(12), "Twelve")

// console.log(numberToWords(123), "One Hundred Twenty Three")
// console.log(numberToWords(0), "Zero")