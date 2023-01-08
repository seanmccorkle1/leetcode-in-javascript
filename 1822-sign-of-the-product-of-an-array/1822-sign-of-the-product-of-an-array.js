var arraySign = function (array) {

    let product = array.reduce((a,b) => a*b, 1)
    
    if (product > 0){
        return 1
    }
    else if (product < 0){
        return -1
    }
    
    // just use else in these 3+ if statements
    return 0
}