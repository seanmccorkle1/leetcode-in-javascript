var findDuplicate = function(array) { 
    
    // cycle detection - slowIndex jumper and fastIndex jumper will meet somewhere in the cycle

    var slowIndex = 0    // start both at 0
    var fastIndex = 0

    var indexesAreDifferent = true
    
    // slowIndex jumper hops 1 step, fastIndex hops 2
    // [2, 6, 4, 1, 3, 1, 5]


    while (indexesAreDifferent) {

        slowIndex
        slowIndex = array[slowIndex]

        console.log(`one step is ${slowIndex}`)

        fastIndex

        const intermediate = array[fastIndex]
        fastIndex = array[intermediate]

        // fastIndex = array[array[fastIndex]]

        console.log(`two steps is ${fastIndex}`)
        
        if (slowIndex == fastIndex) {
            indexesAreDifferent = false
            break
        }
    }

    // Locate the start node of the *cycle*, which will be the duplicate number

    let go = 0
    let prevIndex = slowIndex

    prevIndex
    go

    const duplicateFound = false

    while (!duplicateFound){

        prevIndex
        prevIndex = array[prevIndex]

        go
        go = array[go]

        if (prevIndex == go){
            let duplicate = go
            return duplicate
        }
    }

    return -1
}

console.log(findDuplicate([1,3,4,2,2]),  2)

console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]),  9, "9 is the duplicate")