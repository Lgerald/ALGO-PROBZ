// find out if a linked list has a cycle
var hasCycle = function (head) {
    // loop thru
    while (head) {
        // if theres still a head 
        if (head.val) {
            // set the head to false and move on
            head.val = false;
            head = head.next;
        } else {
            //once we reach a false return true, cause it has a cycle
            return true;
        }
    }
    // if we reach the tail, it will be false, so return false
    return false;
}