



//// Dont focus on minutiae
var maximumUnits = function(subarrays, capacityNum){
    let sorted = subarrays.sort((a, b) => b[1] - a[1]) // maximize the units by going highest to lowest
    let unitCount = 0

    sorted

    for (let array of sorted){ 

        let numberOfBoxes = array[0]
        let unitsInEachBox = array[1]

        if (numberOfBoxes <= capacityNum) { // capacityNum can go to 0
            unitCount += numberOfBoxes * unitsInEachBox
            capacityNum -= numberOfBoxes
        }
        else { // more boxes than capacity   
            unitCount += capacityNum * unitsInEachBox // last 2 boxes
            return unitCount
        }
    }
    return unitCount
}
