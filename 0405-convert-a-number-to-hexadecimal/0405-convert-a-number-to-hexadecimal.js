var toHex = function (num) {

    var currString = ""
    const array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    if (num == 0) {
        return "0"
    }

    if (num <= -1) {
        num += Math.pow(2, 32)
    }

    while (num >= 1) {

        let index = num % 16
        let hexDigit = array[index]

        currString = hexDigit + currString

        num /= 16
        num = ~~num
    }

    return currString
}

254 % 16

console.log(toHex(254), "ff")

// console.log(toHex(255), "ff")
// console.log(toHex(256), "100")

// console.log(toHex(-1), "ffffff")