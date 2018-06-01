/*find the point in a singly linked list where they intersect
- this is assuming we have no duplicates
*/


var getIntersectionNode = function (headA, headB) {
    // create a set
    let set = new Set();
    // to traverse through the lists, while at least one of them is not null
    while (headA || headB) {
        // if one isnt null
        if (headA) {
            // if the set has the value
            if (set.has(headA.val)) {
                //return that, cause thats our intersection point
                return headA;
            }
            // add the value to the set
            set.add(headA.val);
            // continue moving
            headA = headA.next;
        }
        // if head b isnt null
        if (headB) {
            // check if the set has the value already
            if (set.has(headB.val)) {
                // if it does, return that (thats our intersection point)
                return headB;
            }
            set.add(headB.val);
            headB = headB.next;
        }
    }
    // if you make it all the way through, there is no point where they intersect
    return null;
};