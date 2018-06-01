


// removal strategie
// if theres no children --> rm/rf
// if theres children --> iz different
// find the node you want to delete
// grab the smallest value in the right subtree of that node
// ie grab the leftmost value in the right subtree of that node
// grab that value, erase the value we're removing, and replace that value with the smallest value from the right subtree
// we know that its smaller than all the values above it, so its fine to put at that higher value (smallest value of right subtree is only value that can fit there 10% and we can delete it easlily)
function remove(value, parentNode = null) {
    // intiialize current node
    // while its not null, we do things
    //if val < currval -> currentNode = currentNode.next
    // want to keep track of parent node
    // when we remove a node, we want to keep track of the parent of the child we're removing
    // parent node = current node
    // parent node becomes node we were just exploreing
    // other direction -> same but we go right
    // once we have found out node:

        // if curr left and right is not null (if the node we;re removing has chidlren)
            // curr val = curr.right.min()
            // find the min of the right bst
            // call the remove on the curren val, passing current as a parent
            // sets curr node value to be smallest value
            // now, remove smallext val
            // passing in currnode val
            // and pass in as parent node our current node
            // (dont want parent node to default to none)

        // if theres not two child nodes:
            // node that has parent
            // node that doesnt have parent -> root node
            // if curr node is left child
                //-> parentnode.left = currnode.lext

}
