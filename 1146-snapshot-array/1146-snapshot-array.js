class SnapshotArray {

    constructor(length) {
        this.mapArray = new Array(length).fill(null).map(e => new Map()) // max O(n + s)
        this.snapId = -1
    }

    set(index, val) { // O(1)
        this.mapArray[index].set(this.snapId + 1, val)
    }

    snap() { // O(1)
        ++this.snapId
        return this.snapId
    }

    get(index, snap_id) { // O(log(s) + s)

        // O(s)
        const keyArray = Array.from(this.mapArray[index].keys())
        let id = -1

        let left = 0
        let right = keyArray.length - 1
        let mid

        while (left <= right) {

            // mid = left + Math.floor((right - left) / 2)
            mid = ~~((left+right)/2)

            if (keyArray[mid] <= snap_id) {
                id = keyArray[mid]
                left = mid + 1
            } 
            
            else {
                right = mid - 1
            }
        }

        // the exact ID wasn't found, 
        // otherwise it would have hit the equals in the <= condition

        if (id == -1) {
            return 0
        }
        
        let map=this.mapArray[index]
        return map.get(id)
    }
}

const snapshotArr = new SnapshotArray(3) // set the length to be 3

snapshotArr.set(0, 5) // Set array[0] = 5
snapshotArr.snap() // Take a snapshot, return snap_id = 0

snapshotArr.set(0, 6)
snapshotArr.get(0, 0) // Get the value of array[0] with snap_id = 0, return 5