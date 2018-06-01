function reverseList(head) {
    // store our reverse LL here
    var prev = null
    // while we;re not at the end
	while (head) {
        // store the "next" node
        var next = head.next
        // this's nodes next is prev( null intitially cause this is the ne tail)
        head.next = prev
        // prev now equals this node
        prev = head
        // this is now next (so we loop thru and now we start at the next val and reverse again)
		head = next
	}
	return prev
}

function reverseList(head) {
	if (!head || !head.next) {
		return head
	}
	var newHead = reverseList(head.next)
	head.next.next = head
	head.next = null
	return newHead
}
