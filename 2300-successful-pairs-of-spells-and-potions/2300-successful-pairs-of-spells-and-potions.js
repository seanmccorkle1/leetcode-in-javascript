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
        
        const currSpell = spells[index]

        while (leftIndex <= rightIndex) {
            
            leftIndex
            rightIndex

            spells[index]
            
            let midIndex=Math.floor( (rightIndex+leftIndex) / 2)

            // midIndex = ~~(leftIndex + (rightIndex - leftIndex) / 2)
            const currSpellWithPotionNum = currSpell * potions[midIndex]

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
