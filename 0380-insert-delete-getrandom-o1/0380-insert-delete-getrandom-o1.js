class RandomizedSet {

    constructor() {
        this.map = new Map();
        this.array = [];
    }

    insert(key) {
        
        // if it already has the element, return falseand dont insert

        if (this.map.has(key)) {
            return false // cut early
        }

        // start at index 0 by doing while array is still at []
        this.map.set(key, this.array.length)

        this.array.push(key)

        this

        return true
    }


    remove(key) {

        // if it doesnt have it, you cant remove it
        if (!this.map.has(key)) {
            return false
        }

        key

        let deleteIndex = this.map.get(key)
        let lastIndex = this.array.length - 1

        //need semicolons with [] and "this" and assignment
        let lastElement = this.array[lastIndex];

        deleteIndex 
        lastIndex 
        lastElement;

        // this is how you swap
        // [firstPosition, lastPosition] = [lastElement, firstElement]       

        [this.array[deleteIndex], this.array[lastIndex]] =  [this.array[lastIndex], this.array[deleteIndex]]    


        this.array
        this.array.pop()
        this.array

        // lastElement is at the original deleted elements place now
        // you have to update the index

        this.map
        this.map.set(lastElement, deleteIndex)
        this.map


        // delete at the end
        this.map.delete(key)

        this.map
        this.array

        return true
    }


    getRandom() {
        const randIndex = Math.floor(Math.random() * this.array.length)
        return this.array[randIndex]
    }

}

const randomizedSet = new RandomizedSet()

randomizedSet.insert("first")
randomizedSet.insert("second")

randomizedSet.remove("first")