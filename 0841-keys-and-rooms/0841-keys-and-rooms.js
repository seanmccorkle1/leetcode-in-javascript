var canVisitAllRooms = function (doubleArray) {


    // same as a boolean array
    let roomsVisitedArray = new Uint8Array(doubleArray.length)


    const stack = [0]


    // automatically get access to room 0
    let roomsVisited = 1


    roomsVisitedArray[0] = 1
    roomsVisitedArray



    doubleArray


    while (stack.length != 0) {


        stack
        let mostRecentKey = stack.pop()
        stack


        mostRecentKey


        // keys in room1, keys in room2
        let keysInRoomArray = doubleArray[mostRecentKey]


        for (let key of keysInRoomArray) {


            key
            roomsVisitedArray


            const roomIsUnvisited = roomsVisitedArray[key] == 0



            if (roomIsUnvisited) {


                stack.push(key)
                stack


                // now we visited it
                roomsVisitedArray[key] = 1
                roomsVisitedArray


                roomsVisited += 1
            }
        }
    }


    doubleArray
    doubleArray.length
    
    roomsVisited    

    let totalRooms = doubleArray.length
    
    // CAN visit all rooms
    if (roomsVisited == totalRooms) {
        return true
    }

    // cant visit all
    else if (roomsVisited != totalRooms){
        return false
    } 
}
