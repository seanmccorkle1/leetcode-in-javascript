var removeElements = function(head, numToDelete) {

    if (!head) {
        return head
    }
    
    while(head && head.val===numToDelete) {
            head = head.next;
    }
    
	// skip any nodes whos values match the parameters and set it to the node after
	// if the node is found, set curr.next to the node after it then try again
	// otherwise iterate forward
    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === numToDelete) curr.next = curr.next.next;
        else curr = curr.next;
    }
    
    return head;
};
