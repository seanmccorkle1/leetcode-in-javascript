/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var getDecimalValue = function(head) {

    let sum = 0

    while (head) {
        sum <<= 1
        sum |= head.val
        
        head = head.next
    }
    return sum
}