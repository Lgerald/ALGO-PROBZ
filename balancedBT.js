function validBST(tree) {
    return helper(tree, -Infinity, Infinity)
}

function helper(tree, min, max) {
    if (tree === null) return true
    if (tree.value >= max || tree.value < min) return false
    return helper(tree.left, min, tree.value) && helper(tree.right, tree.value, max)
}


// iterative approach
// worst case o(n) also space worst case o(n), because we're storing the tree on the stack ,and worst case we traverse the whole tree
function isBinarySearchTree(tree) {
    //start at root w/ an arbitratily low lower bound and arbitrarily large upper bound
    // nodes and bounds = array of obj, w/ nodes and upper and lower bounds
    let nodesAndBoundsStack = []
    nodesAndBoundsStack.push({node: tree, lowerBound: -Infinity, upperBound: Infinity})
    //depth first traversal (the trees breadth can double each time it gets one level deeper, so a depth 1st approach would be more space efficient)
    // repeat until we run out of nodes
    while (nodesAndBoundsStack.length) {
        // pop off and destructure our node
        let nodesAndBounds = nodesAndBoundsStack.pop()
        let { node, lowerBound, upperBound } = nodesAndBounds
        // if the node is invalid return false
        // invalid node = the value is less than the lower bound, or greater than the upper bound (it should be within the two)
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false
        }
        // if we have a left, add it to the stack
        // also the left cannot be greater than the current val, so its upper bound is now the node value
        if (node.left) {
            nodesAndBoundsStack.push({ node: node.left, lowerBound, upperBound: node.value })
        }
        // if we have a right, add it to the stack
        // also right cannot be less than the current value, so thats our new lower bound
        if (node.right) {
            nodesAndBoundsStack.push({
							node: node.left,
							lowerBound: node.value,
							upperBound
						})
        }
    }
    return true
}
