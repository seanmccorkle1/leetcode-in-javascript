// stringArray disjoint set union (disjointSetMap) is stringArray data structure that stores stringArray collection of disjoint (non-overlapping) sets.

// equivalently, this means it can partition stringArray set into disjoint subsets

class DSU {
    constructor() {
        this.map = new Map()
    }

    find(node) {

        if (!this.map.has(node)) {

            this.map.set(node, node)
            this.map
        }

        const foundNode = this.map.get(node)

        if (foundNode == node) {
            return node
        }
        
        const result= this.map.get(node)
        return this.find(result)
    }

    // count the number of parent nodes as 
    // parents are nodes where key and value is equal

    union(u, v) {

        const foundValue = this.find(v)
        const getUnion = this.map.get(this.find(u))

        this.map.set(foundValue, getUnion)
    }

        getCount() {            

            const filteredKeys = [...this.map.keys()].filter(key => key == this.map.get(key))
            let numOfParentNodes= filteredKeys.length
            return numOfParentNodes
            
        // return [...this.map.keys()].filter(key => key == this.map.get(key)).length

    }

}

var isSimilar = function (word1, word2) {
    
    let numOfDifferences = 0
    let index = 0
    
    // word1 and word2 both work
    
    while (index < word2.length) {
        
        let word1Letter= word1[index]
        let word2Letter = word2[index]
        
        if (word1Letter != word2Letter) {
           numOfDifferences += 1
        }
        
        index++
    }

    
    if (numOfDifferences <= 2){
        return true
    }
    else if (numOfDifferences >= 3){
        return false
    }

}

var numSimilarGroups = function(stringArray) {
    
    // to make the identifier disjointSetMap actually do something, 
    // you need parantheses
    
    const disjointSetMap = new DSU()

    for (let index = 0; index < stringArray.length; index++) {

        let matchFound = false

        for (let fastIndex = index + 1; fastIndex < stringArray.length; fastIndex++) {

            const stringsAreSimilar = isSimilar(stringArray[index], stringArray[fastIndex])

            if (stringsAreSimilar) {
                disjointSetMap.union(stringArray[index], stringArray[fastIndex])
                matchFound = true
            }   
        }
        
        if (!matchFound) {
            disjointSetMap.union(stringArray[index], stringArray[index])
        }
    }
    
    disjointSetMap
    return disjointSetMap.getCount()
}

console.log(numSimilarGroups(["tars","rats","arts","star"]), 2)