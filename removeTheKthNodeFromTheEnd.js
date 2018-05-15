function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    // make two pointers, first and second, and a counter
    //traverse the ll until kth node
    // then traverse to the end moving both the kth node, and the first
    // once first reaches the tail (null valuue), whenever second is, reassign the pointers to remove this one
    let first = head
    let second = head
    let counter = 1
    while (counter <= k) {
        first = first.next
        counter++
    }
    // if we've reached the end, remove the head
    if (first === null) {
        head.value = head.next.value
        head.next = head.next.next
        return
    }
    // otherwise, while first !== null, keep moving
    while (first.next !== null) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next



}