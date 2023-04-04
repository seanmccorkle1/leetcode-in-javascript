var successfulPairs = function(spells, potions, successNum) {

    const successOfSpellsArray = []

    // binary search needs a sort
    potions.sort((a, b) => a - b)

    spells
    potions

    for (let index = 0; index < spells.length; index++) {

        let leftIndex = 0
        let rightIndex = potions.length - 1
        
        let midIndex

        leftIndex
        rightIndex
        index

        
        while (leftIndex <= rightIndex) {

            leftIndex
            rightIndex

            spells[index]
            
            let midIndex=Math.floor( (rightIndex+leftIndex) / 2)

            // midIndex = ~~(leftIndex + (rightIndex - leftIndex) / 2)
            const currSpellWithPotionNum = spells[index] * potions[midIndex]

            if (currSpellWithPotionNum >= successNum) {
                rightIndex = midIndex - 1
            } 

            else if (currSpellWithPotionNum < successNum){
                leftIndex = midIndex + 1
            }

        }

        rightIndex

        let currSpellEfficacy = (potions.length - rightIndex) - 1

        successOfSpellsArray[index] = currSpellEfficacy
        successOfSpellsArray

    }
    return successOfSpellsArray
}

// console.log(successfulPairs({
//         spells: [5, 1, 3],
//         potions: [1, 2, 3, 4, 5],
//         successNum: 7
//     }), [4, 0, 3],
//     "spell 1 with all 5 potions had 4 successful potions, so 4 goes into the first position")

// console.log(successfulPairs({spells:[5, 8, 12, 15], potions: [3, 2], successNum: 1}),    [2, 2, 2, 2], "[spell #1: 2 successful potions, spell #2: 2 successful potions")