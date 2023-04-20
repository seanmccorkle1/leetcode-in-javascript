var successfulPairs = function (spells, potions,successNum) {

    const spellEfficacies =new Array(spells.length)

    spells
    
    // binary search needs a sorted array

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
        
            let midIndex = Math.floor((leftIndex + rightIndex) / 2)
            let midPotion = potions[midIndex]
            
            let spellWithPotion = currSpell * midPotion
            
            // equalling successNum counts as a success
            
            if (spellWithPotion >= successNum) {
                rightIndex = midIndex - 1
            } 
            
            else if (spellWithPotion < successNum) {
                leftIndex = midIndex + 1
            }
        }

        potions.length
        leftIndex

        // higher left index = worse efficacy
        // higher left index means it kept being  below successNum, ie fail
        let currSpellEfficacy= potions.length - leftIndex
        
        spellEfficacies[spellIndex] = currSpellEfficacy
    }
    return spellEfficacies
}



console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5],7), [4, 0, 3],
"spell 1 with all 5 potions had 4 successful potions, so 4 goes into the first position")


// console.log(successfulPairs({spells:[5, 8, 12, 15], potions: [3, 2], successNum: 1}),    [2, 2, 2, 2], "[spell #1: 2 successful potions, spell #2: 2 successful potions")