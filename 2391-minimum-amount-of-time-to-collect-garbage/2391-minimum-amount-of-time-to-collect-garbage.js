
var garbageCollection = function (garbageArray, travel) {

    let time = 0
    const lastGarbageVisitObj = { G: 0, M: 0, P: 0 }

    garbageArray

    lastGarbageVisitObj

    // for (let index = 0; index < garbageArray.length; index++) {

    //     index

    //     const currGarbageString = garbageArray[index]

    //     for (let nestedIndex = 0; nestedIndex < currGarbageString.length; nestedIndex++) {

    //         index
    //         nestedIndex

    //         lastGarbageVisitObj[garbageArray[index][nestedIndex]] = index
    //         time += 1
    //     }
    // }

    lastGarbageVisitObj

    let gVisitedOnce = false 
    let mVisitedOnce = false 
    let pVisitedOnce = false 

    for (let backIndex = garbageArray.length - 1; backIndex >= 0; backIndex--) {
        const garbageString = garbageArray[backIndex]

        if (garbageString.includes("G") && !gVisitedOnce){
            lastGarbageVisitObj["G"] = backIndex 
            gVisitedOnce = true
        }

        if (garbageString.includes("M") && !mVisitedOnce){
            lastGarbageVisitObj["M"] = backIndex
            mVisitedOnce=true
        }

        if (garbageString.includes("P") && !pVisitedOnce){

            // lastGarbageVisitObj["P"] = Math.max(backIndex ,0)
            lastGarbageVisitObj["P"] = backIndex
            pVisitedOnce = true
        }

    }

    lastGarbageVisitObj
    time += garbageArray.join("").length

    // let groupedArray  = garbageArray.join("").split("").sort().join("").match(/([^])\1+/g)
    // time  = groupedArray.join("").length

    // for (let consecutiveLetterString of groupedArray){

    //     consecutiveLetterString
    //     let firstLetter = consecutiveLetterString[0]

    //     lastGarbageVisitObj[firstLetter] = consecutiveLetterString.length
    // }

    time

    garbageArray
    travel

    lastGarbageVisitObj

    for (let index = 0; index < travel.length; index++) {

        let currTravelTime = travel[index]

        // if at least one "P" lies ahead
        // it has to take 1 time hit to get 1 step closer to the last "P"

        if (lastGarbageVisitObj["P"] > index) {
            time += currTravelTime
        }
        if (lastGarbageVisitObj["G"] > index) {
            time += currTravelTime
        }

        if (lastGarbageVisitObj["M"] > index) {
            time += currTravelTime
        }

        // only take the time hit when moving forward
        // if youre on the same index, just pick the trash up

        const noGarbageLeft= 
        lastGarbageVisitObj["M"] <= index && 
        lastGarbageVisitObj["G"] <= index && 
        lastGarbageVisitObj["P"] <= index
     
        if (noGarbageLeft){
            return time
        }

    }

    return time
}

// garbageCollection(["G","P","GP","GG"], [2,4,3]) // 21

garbageCollection(["MMM","PGM","GP"], [3,10]) // 37