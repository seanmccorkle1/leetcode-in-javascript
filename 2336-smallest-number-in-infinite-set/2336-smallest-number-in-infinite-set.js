var SmallestInfiniteSet = function() {    
    this.array=Array.from({length: 1001}, (u, index) => index)    
}

SmallestInfiniteSet.prototype.popSmallest = function() {   
    
    let smallest = this.array.find(num => num >= 1)
    
    // "pop" it
    this.array[smallest] = 0
    
    return smallest
}

SmallestInfiniteSet.prototype.addBack = function(numToAdd) {    
    
    this.array[numToAdd] = numToAdd
   
    return
}

const infiniteSetObj = new SmallestInfiniteSet()

infiniteSetObj.addBack(2);    // 2 is already in the set, so no change is made.
infiniteSetObj.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
infiniteSetObj.popSmallest(); // return 2, and remove it from the set.
