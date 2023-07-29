// returns a count

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

    // k cant be outside the valid range
    // if its (7, 7, k), then k = 1 to fit

    if (lowNum == highNum) {
        return highNum // return the key itself, not the describing value
    }
    
    // if (k == 1){

    //     if (lowNum % 2 ==0){
    //         return lowNum
    //     }

    //     else if (lowNum % 1 == 0){
    //         return lowNum + 1
    //     }
    // }

    let array = []
    const stepsTo1Obj = {}

    lowNum
    highNum

    let incr = lowNum

    while (incr <= highNum) {

        array.push(incr)
        stepsTo1Obj[incr] = `${String(countStepsTo1(incr))} steps`

        incr += 1
    }

    stepsTo1Obj

    // sort by increasing numOfSteps
    // array.sort((a, b) => Number(stepsTo1Obj[a]) - Number(stepsTo1Obj[b]))

    array.sort((a, b) => Number((stepsTo1Obj[a]).replace(/[\s][^]+/, "")) - 
    Number((stepsTo1Obj[b]).replace(/[\s][^]+/, "")))

    // return the number, not the number of steps
    // adjust for k being a natural ordinal number

    // use arrays for order-related k problems
    // at least for the return value

    array
    k

    let kthSortedElement = array[k - 1]
    return kthSortedElement
}

getKth(3, 7, 2) // 5
// the second number after the sort is 5

// getKth(18, 80, 1)
// getKth(17, 18, 1)