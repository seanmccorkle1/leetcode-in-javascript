
var SmallestInfiniteSet = function() {    
    // this.array = new Array(1001).fill(true)
    this.array=Array.from({length: 1000}, (u, index) => index + 1)
    this.array.unshift(false)
    this.array
}

SmallestInfiniteSet.prototype.popSmallest = function() {

    // let indexOfMin = this.array.findIndex(element=> typeof element == "number")

    let smallest= this.array.find(element=> typeof element == "number")

    if (smallest == undefined) {
        return
    }

    // "pop" it
    this.array[smallest] = false
    return smallest

    for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i]) {
                this.arr[i] = false;
                return i;
            }
        }

    return null;
}

SmallestInfiniteSet.prototype.addBack = function(numToAdd) {    

    // this.array[num] = true
    // if (this.array[numToAdd] == numToAdd) {
    //     return  
    // }


    if (!this.array.at(numToAdd)) {
        this.array[numToAdd] = numToAdd
    }

    return

}


const infiniteSetObj = new SmallestInfiniteSet()

infiniteSetObj.addBack(2);    // 2 is already in the set, so no change is made.
infiniteSetObj.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
infiniteSetObj.popSmallest(); // return 2, and remove it from the set.
