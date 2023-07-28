var totalMoney = function (num) {

    let total = 0

    let increment = 1
    let weekCount = 0

    // check the if condition on the first loop with the day as 1
    let dayCount = 1
    
    while (num >= 1) {

        total += increment

        if (dayCount % 7 == 0) {
            weekCount += 1
            increment = 1 + weekCount
        } 
        
        else {
            increment += 1
        }

        dayCount++
        num--
    }

    return total
}

totalMoney(26) // 135

// totalMoney(10) // 37     (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4)
// totalMoney(20) // 96