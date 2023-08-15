/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    
    let fdum = new ListNode(0), bdum = new ListNode(0)
    
    let front = fdum
    let back = bdum
    let curr = head

    while (curr) {
        
        if (curr.val < x){
            front.next = curr
            front = curr
        }
        
        else if (curr.val >= x) {
            back.next = curr, back = curr
        }
        
        curr = curr.next
    }
    
    front.next = bdum.next
    back.next = null
    
    return fdum.next
}

