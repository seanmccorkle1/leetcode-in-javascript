function countStepsTo1(num) {

    let stepCount = 0

    while (num >= 2) {

        // it will always get to 1
        num = ((num % 2) == 0) ? num / 2 : ((num * 3) + 1)

        stepCount++
    }
    return stepCount
}


var getKth = function (lowNum, highNum, k) {

    // returns a count

    let array = []
    const stepsTo1Obj = {}

    if (lowNum == highNum) {
        return highNum // return the key itself, not the describing value
    }

    lowNum
    highNum

    let incr = lowNum

    while (incr <= highNum) {

        array.push(incr)
        stepsTo1Obj[incr] = String(countStepsTo1(incr))

        incr += 1
    }

    stepsTo1Obj
    array

    return Number(Object.entries(stepsTo1Obj).sort((a,b) => Number(a[1]) - Number(b[1]))[k - 1][0])

    array.sort((a, b) => Number(stepsTo1Obj[a]) - Number(stepsTo1Obj[b]))

    // return the number, not the number of steps
    // adjust for k being a natural ordinal number

    k

    // need indexed arrays for k problems
    // objects cant sort as easily

    let kthSortedElement = array[k - 1]
    return kthSortedElement
}

console.log(getKth(3, 7, 1), 4)