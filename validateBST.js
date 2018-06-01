function validateBST(tree) {
    return helper(tree, -Infinity, Infinity)
}

function helper(tree, minValue, maxValue) {
    // we've reached the bottom
    if (tree === null) return true
    if (tree.value < minValue || tree.value >= maxValue) return false
    const leftIsvalid = helper(tree.left, minValue, tree.value)
    const rightIsvalid = helper(tree.right, tree.value, maxValue)
    return leftIsvalid && rightIsvalid
}