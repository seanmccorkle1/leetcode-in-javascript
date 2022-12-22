/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many - depend on your schedule, but I think the number isnt really important. Learning from the question youve solved is indeed more essential.
* 
 * @param {string} 
 * @return {number}
 *
 * 
*/


class RandomizedSet {

    constructor() {
        this.map = new Map();
        this.array = [];
    }

    // if it already has the element, return false and dont insert

    insert(keyString) {

        if (this.map.has(keyString)) {
            return false // cut early
        }


        // start at index 0 by doing while array is still at []
        keyString

        this.map.set(keyString, this.array.length)

        this.map


        this.array.push(keyString)
        
        this
        return true

    }


    remove(keyString) {

        // if it doesnt have it, you cant remove it

        this.map

        if (!this.map.has(keyString)) {
            return false
        }

        keyString

        let deleteIndex = this.map.get(keyString)

        let lastIndex = this.array.length - 1
        let lastElement = this.array[lastIndex]; // NEED SEMICOLON WITH "THIS" AND []

        // this is how you swap
        // [firstPosition, lastPosition] = [lastElement, firstElement]


        // [position0, lastPosition] = ["second", valToDelete]

        [this.array[deleteIndex], this.array[lastIndex]] = [this.array[lastIndex], this.array[deleteIndex]];

        this.array

        // pop to keep array.length consistent
        this.array.pop()


        this.array

        // lastElement is at the original deleted elements place now
        // you have to update the index


        this.map
        this.map.set(lastElement, deleteIndex)
        this.map

        // delete at the end
        this.map.delete(keyString)

        this.map
        this.array


        return true
    }

    getRandom() {
        
        const randIndex = Math.trunc(Math.random() * this.array.length)
        return this.array[randIndex]
    }

}


const randomizedSet = new RandomizedSet()
randomizedSet

console.log(randomizedSet.insert("first"), true)
randomizedSet

console.log(randomizedSet.insert("second"), true)
randomizedSet

console.log(randomizedSet.insert("second"), false, "already there")
randomizedSet

console.log(randomizedSet.remove("first"), true)

console.log(randomizedSet.remove("first"), false, "can't remove it, `first` isnt there")

randomizedSet.insert("third")

randomizedSet.getRandom()