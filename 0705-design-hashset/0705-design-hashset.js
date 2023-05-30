var MyHashSet = function() {
    this.hashSet= {}
}

MyHashSet.prototype.add = function(key) {
    this.hashSet[key] = 0
}

// explicit reference for updating and deleting objects 
// (including arrays)

MyHashSet.prototype.remove = function(key) {
    delete this.hashSet[key] 
}

MyHashSet.prototype.contains = function (key) {    
    return this.hashSet[key] !== undefined
}
