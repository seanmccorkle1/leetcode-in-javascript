/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


var hasCycle = head => {
    
    let fast = head
    
    while (fast && fast.next) {
        
        head = head.next
        fast = fast.next.next
        
        if (head == fast) {
            return true
        }
    }
    
    return false
}