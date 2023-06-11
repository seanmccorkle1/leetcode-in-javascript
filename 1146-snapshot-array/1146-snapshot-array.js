class SnapshotArray {

    constructor(length) {
        
        this.elements = new Array(length).fill(null).map(e => new Map());   // max O(n + s)
        
        this.snapId = -1
    }
    
    set(index, val) {   // O(1)
        this.elements[index].set(this.snapId +1, val)
    }
    
    snap() {    // O(1)
        ++this.snapId
        return this.snapId;
    }
    
    get(index, snap_id) {   // O(log(s) + s)
        
        // O(s)
        const element = Array.from(this.elements[index].keys())
        let id = -1
        
        let left = 0
        let right = element.length - 1
        let mid

        while(left <= right) {
            
            mid = left + Math.floor((right - left) / 2);

            if (element[mid] <= snap_id) {
                id = element[mid];
                left = mid + 1;
                // break
            }
            
            else {
                right = mid - 1
            }
        }
        return id === -1 ? 0 : this.elements[index].get(id);
    }
}