var successfulPairs = function (spells,potions,successNum
) {

    const successOfSpellsArray = new Array(spells.length)


    // binary search needs a sort
    potions.sort((a, b) => a - b)



    spells
    potions



    for (let index = 0; index < spells.length; index++) {

        let currSpell = spells[index]

        let leftIndex = 0
        let rightIndex = potions.length - 1

        // <= to get -1 for rightIndex

        while (leftIndex <= rightIndex) {

            let midIndex = Math.trunc((leftIndex+rightIndex) / 2)

            // binary search with > and <= conditions        
            const spellValue = currSpell * potions[midIndex]

            if (spellValue >= successNum){
                rightIndex = midIndex - 1
            }

            else if (spellValue < successNum) {
                leftIndex = midIndex+1
            }

        }
        index

        leftIndex
        rightIndex

        successOfSpellsArray[index]= potions.length - rightIndex-1
    }
    return successOfSpellsArray
}

// console.log(successfulPairs({
//         spells: [5, 1, 3],
//         potions: [1, 2, 3, 4, 5],
//         successNum: 7
//     }), [4, 0, 3],
//     "spell 1 with all 5 potions had 4 successful potions, so 4 goes into the first position")

// console.log(successfulPairs({spells:[5, 8, 12, 15], potions: [3, 2], successNum: 1}), [2, 2, 2, 2], "[spell #1: 2 successful potions, spell #2: 2 successful potions")

// console.log(successfulPairs({spells:[3,1,2], potions: [8,5,8], successNum: 16}),   [2, 0 , 2])
