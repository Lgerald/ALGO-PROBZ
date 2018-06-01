

// time: O(n) | space O(n)
function invertBinaryTree(tree) {
    let queue = [tree]
    while (queue.length) {
        let current = queue.shift()
        if (current === null) continue
        swap(current)
        queue.push(current.left)
        queue.push(current.right)

    }

}

function swap(current) {
    let temp = current.left
    current.left = current.right
    current.right = temp
}


// time: O(n) | space O(b) (where b is the depth of the tree, that will possibly be stored on the callstack at once)
function invertBinaryTree(tree) {
    // Write your code here.
    if (tree === null) return
    swap(tree)
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
}

function swap(current) {
    let temp = current.left
    current.left = current.right
    current.right = temp
}