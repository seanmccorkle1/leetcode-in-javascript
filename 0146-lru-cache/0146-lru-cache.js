class LRUCache {

    constructor(capacity) {
        this.cacheMap = new Map()
        this.cacheCapacity = capacity
    }

    get(key) {

        if (!this.cacheMap.has(key)) {
            return -1
        }

        const valueOfKey = this.cacheMap.get(key)

        this.cacheMap.delete(key)

        // update the key by setting (pushing) it to the back
        // since it was used by this function

        this.cacheMap.set(key, valueOfKey)
        // this.cacheMap.get(key)

        // return only the value of the key
        return valueOfKey
    }
    
    put(key, value) {

        if (this.cacheMap.has(key)) {
            this.cacheMap.delete(key)
        }

        this.cacheMap.set(key, value)

        // keys().next().value returns first item's key

        key

        // check for exceeding the capacity after setting the new number

        // the least recently updated will be at the start
        // because new values get pushed to the end

        // so you only need one next() function to find it

        if (this.cacheMap.size > this.cacheCapacity) {

            this.cacheMap

            const keyToDelete = this.cacheMap.keys().next().value
            this.cacheMap.delete(keyToDelete)
        }
    }
}


const lRUCache = new LRUCache(2)

Object.entries(lRUCache)[0][1]

Object.keys(lRUCache)
Object.values(lRUCache)

// cache is {1=1}
lRUCache.put(1, 1)

// cache is {1=1, 2=2}
lRUCache.put(2, 2)

lRUCache.get(1)
// return 1

// LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.put(3, 3)

// returns -1 (not found)
lRUCache.get(2)

// LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.put(4, 4)

// return -1 (not found)
lRUCache.get(1)

// return 3
lRUCache.get(3)

// return 4
lRUCache.get(4)