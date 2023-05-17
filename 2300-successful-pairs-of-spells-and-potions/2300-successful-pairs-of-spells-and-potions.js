
var successfulPairs = function (spells, potions,successNum) {
    const spellEfficacies =new Array(spells.length)
    
    // could be unsorted
    potions.sort((a, b) => a - b)

    spells
    potions
    
    for (let spellIndex = 0; spellIndex < spells.length; spellIndex++) {

        let leftIndex = 0
        let rightIndex = potions.length - 1
    
        const currSpell = spells[spellIndex]
        
        while (leftIndex <= rightIndex){
            
            let midIndex = Math.floor((leftIndex + rightIndex) / 2)
            const currSpellWithPotion = currSpell * potions[midIndex]
            
            if (currSpellWithPotion >= successNum){
                rightIndex = midIndex - 1
            }
            else {
                leftIndex = midIndex + 1
            }       
        }
        
        spellEfficacies[spellIndex] = potions.length - leftIndex
    }
    
    return spellEfficacies
}