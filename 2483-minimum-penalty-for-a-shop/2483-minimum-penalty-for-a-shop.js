var bestClosingTime = function(array) {

    let currentBalance = 0
    let maxBalance = 0

    let closingHour = 0

    for (var index = 0; index < array.length;index++){

        if (array[index] == "Y"){
            ++currentBalance
        }

        else if (array[index] == "N") {
            --currentBalance
        }

        if (currentBalance > maxBalance){

            // this updates the condition above
            maxBalance = currentBalance

            // only jump the closing time when the YN balance is positive
            // "YN balance is positive" means more money

            closingHour = index + 1
        }
    }
    
    maxBalance
    return closingHour
}

bestClosingTime("YYNY") // 2

// bestClosingTime("NNNN") // 0  | closing at the 0th hour is best
// bestClosingTime("YYYY") // 4 | dont close