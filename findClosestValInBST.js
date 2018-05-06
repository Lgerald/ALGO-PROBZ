/*question: you are given a BST data structure consisting of BST nodes. each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called left and right. A node is said to be a BST node iff it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or null values. you are given a target integer value; write a function that finds the closest value to that target value contained in the BST. assume there will only be one closest value  */

// recursive
// Average O(log(n)) time | O(log(n)) space
// worst O(n) time | O(n) space --> if you have to traverse the whole tree?
function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree, target, Infinity)
}

function findClosestValueInBstHelper(tree, target, closest) {
	//once we get to the bottom of the tree, return closest
	if (tree === null) return closest
	// check the value of the current node verses the target
	// if the diff between the current val is smaller
	if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
		closest = tree.value
	}
	// set the diff of that equal to the closest if its closer to zero than the previous closest
	// if its closer reasign
	//traverse the tree
	// if the target is less than our value --> go left cause the value will not be on the other side
	if (target < tree.value)
		return findClosestValueInBstHelper(tree.left, target, closest)
	// if the target is greater than our value, go right, cause same as above
	else if (target > tree.value)
		return findClosestValueInBstHelper(tree.right, target, closest)
	// otherwise return closest because you've found the closest value, also you can no longer traverse ur tree at this point?
	else return closest
}


// iterative
// Average O(log(n)) time | O(1) space
// worst O(n) time | O(1) space
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, Infinity)
}

function findClosestValueInBstHelper(tree, target, closest) {
    // intialize a variable to contain the remaining tree
    let currentNode = tree
    // while we havent reached the bottom of the tree
    while (currentNode !== null) {
        // compare the abs value of the closest and current value versus the target, if the current node value is closer to zero, reassing the closest to the current node value
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            cloest = currentNode.value
        }
        //if the current node is bigger than the target go left
        if (target < currentNode.value) {
            currentNode = currentNode.left
        // otherwise go right
        } else if (target > currentNode.value) {
            currentNode = currentNode.right
        // once we finish, lets break out of the for loop
        } else {
            break
        }
    }
    // and retun the closest value
    return closest
}