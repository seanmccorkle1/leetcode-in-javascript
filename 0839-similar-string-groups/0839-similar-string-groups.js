// a disjoint set union (DSU) is a data structure that stores a collection of disjoint (non-overlapping) sets.

// equivalently, this means it can partition a set into disjoint subsets

class DSU {
    constructor() {
        this.uv = new Map()
    }
    
    find(node) {
        
        if (!this.uv.has(node)) {
            this.uv.set(node, node)
        }
        
        const foundNode = this.uv.get(node)
        
        if (foundNode == node) {
            return node
        }
        
        const result= this.uv.get(node)
        return this.find(result)
        // return this.find(this.uv.get(node))
    }
    
            // count the number of parent nodes as parents are nodes where key and value is equal

    union(u, v) {
    
        const foundValue = this.find(v)

        // this.find(u);
        const getUnion = this.uv.get(this.find(u))
        
        this.uv.set(foundValue, getUnion)
}
        getCount() {
        return [...this.uv.keys()].filter(key => key == this.uv.get(key)).length
    }

}
var isSimilar = function (word1, word2) {
    
    let diff = 0
    let i = 0
    
    while(i < word1.length) {
        
        if (word1[i] != word2[i]) {
           diff += 1
        }
        
        i++
    }
    
    if (diff <= 2){
        return true
    }
    
    return false
}

var numSimilarGroups = function(A) {
    
    let dsu = new DSU();
    
    for (let i = 0; i < A.length; i++) {
        let matchFound = false;
        for (let j = i + 1; j < A.length; j++) {
            if (isSimilar(A[i], A[j])) {
                dsu.union(A[i], A[j]);
                matchFound = true;
            }   
        }
        if (!matchFound) {
            dsu.union(A[i], A[i]);
        }
    }
    
    return dsu.getCount();
};
