/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */

var splitListToParts = function(root, k) {

    const res = new Array(k).fill(null); // will contain split linked list 
    let n = 0; // total # of nodes in the link list
    
    let curr = root;
    
    // count the # of nodes
    while (curr != null) {
        curr = curr.next;
        n++;
    }
    
    const width = Math.floor(n / k); // initial width of each linked list parts
    let rem = n % k; // remaining nodes
    
    let head = root;
    let tail = root;
    
    for (let i = 0; head != null; i++) {

        let m = width;
        
        if (rem > 0) {
            m++
            rem--
        }
        
        let tail = head;
        
        for (let j = 1; j < m; j++) {
            tail = tail.next;
        }
        
        const next = tail.next;
        tail.next = null
        
        res[i] = head;
        head = next;
    }
    
    return res;
};
