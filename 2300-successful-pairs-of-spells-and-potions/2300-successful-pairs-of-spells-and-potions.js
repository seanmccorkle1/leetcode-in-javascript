var successfulPairs = function (spells, potions,successNum) {

    const successOfSpellsArray = []

    // binary search needs a sort
    spells

    potions.sort((a, b) => a - b)

    spells
    potions

    for (let spellIndex = 0; spellIndex < spells.length; spellIndex++) {

        // reset indexes on every new spell
        let leftIndex = 0
        let rightIndex = potions.length - 1

        const currSpell = spells[spellIndex]

        leftIndex
        rightIndex


        spellIndex

        // <= to get -1 for rightIndex

        while (leftIndex <= rightIndex) {

            leftIndex
            rightIndex

            let midIndex = Math.floor((rightIndex + leftIndex) / 2)

            const currValueWithPotion = currSpell * potions[midIndex]

            // binary search cuts the range in HALF, not increment/decrement
            // equalling successNum counts as a win

            if (currValueWithPotion >= successNum) {
                rightIndex = midIndex - 1
            } 

            else if (currValueWithPotion < successNum) {
                leftIndex = midIndex + 1
            }
        }

        potions.length
        
        let currSpellEfficacy= potions.length - leftIndex

        leftIndex
        rightIndex

        // higher right index = worse efficacy        
        // let currSpellEfficacyValue = (potions.length - rightIndex) - 1

        successOfSpellsArray[spellIndex] = currSpellEfficacy
        successOfSpellsArray
    }
    return successOfSpellsArray
}



console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5],7), [4, 0, 3],
"spell 1 with all 5 potions had 4 successful potions, so 4 goes into the first position")


// console.log(successfulPairs({spells:[5, 8, 12, 15], potions: [3, 2], successNum: 1}),    [2, 2, 2, 2], "[spell #1: 2 successful potions, spell #2: 2 successful potions")