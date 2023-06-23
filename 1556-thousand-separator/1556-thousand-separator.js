
var thousandSeparator = function(num) {

    num = String(num)

    if (num <= 99){
        return String(num)
    }
    
    // let array = new Array(~~(num.length / 3))
    let array = []
    array.length

    num = String(num)

    let backIndex = String(num).length - 1

    while (backIndex >= 0){

        let threeDigits = num.slice(backIndex - 2, backIndex + 1)
        array[backIndex] = threeDigits

        // array.push(num.slice(backIndex - 3, backIndex))
        backIndex -= 3
    }

    array = array.filter(e => Boolean(e))

    array

    let numWithSeparators = array.join(".")

    if (num.length % 3 == 1){
        return num[0] +"."+numWithSeparators
    }

    else if (num.length % 3 == 2){
        return num[0] +num[1]+"."+numWithSeparators
    
    }

    return numWithSeparators

}

// console.log(thousandSeparator(3154000), "3.154.000")
console.log(thousandSeparator(31540000), "31.540.000")
// console.log(thousandSeparator(310540000), "310.540.000")