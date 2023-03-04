var findWinners = function (doubleArray) {

    // count zero or one LOSSES, number of wins doesnt matter

    const numLossesObj = {}

    // if the winner isnt in the object yet and his first time appearing is a win
    // initialize him to "existing" and 0 losses (cause he won)
 

    for (const [winner, loser] of doubleArray) {

        const winnerAlreadyExists = (numLossesObj[winner] != undefined) ? true : false
        const loserAlreadyExists = (numLossesObj[loser] != undefined) ? true : false

        winner
        loser
        
        // if winner #4 isnt in the object yet
        // he won so initialize him to 0 losses

        if (!winnerAlreadyExists) {
            numLossesObj[winner] = 0
        }
    

        if (loserAlreadyExists) {
            numLossesObj[loser] += 1
        }

        else if (!loserAlreadyExists) {
            numLossesObj[loser] = 1
        }
    }

    const twoSubarrays = [
        [],
        []
    ]

    // for(let key IN obj)
    // keys are string-keyed in objects
    // Object.keys and Object.entries() included give strings

    numLossesObj


    for (let playerIDString in numLossesObj) {

        let playerID = Number(playerIDString)

        let zeroLossesArray = twoSubarrays[0]
        let oneLossArray = twoSubarrays[1]

        let numOfLosses = numLossesObj[playerID]

        // either 0 losses or 1 loss, mutually exclusive, 
        // use "else if"

        if (numOfLosses == 0) {
            zeroLossesArray.push(playerID)
        } 

        else if (numOfLosses == 1) {
            oneLossArray.push(playerID)
        }
    

        console.log(`player #${playerID} has ${numOfLosses} losses`)
    }

    // you dont have to sort because the object
    // already sorts in increasing order by key

    // the for loop was (let playerKey in obj)
    // which went from 1-10
    
    numLossesObj
    return twoSubarrays
}

console.log(findWinners( [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9] ]), [[1,2,10],[4,5,7,8]], "players #[1,2,10] had 0 losses, players [4,5,7,8] had 1 loss, players [3,6,9] had 2 or more")