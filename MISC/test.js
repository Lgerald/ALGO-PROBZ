function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

let list = new LinkedListNode(1)
list.next = new LinkedListNode(2)
list.next.next = new LinkedListNode(3)
list.next.next.next = new LinkedListNode(4)
function swap(LL, n1, n2) {
    let counter = 1
    let pt1 = n1
    let pt2 = n2
    while (counter < n1) {
        pt1 = pt1.next
    }
    counter = 1
    while (counter < n2) {
        pt2 = pt2.next
    }
    let temp1 = pt1.next
    let temp2 = pt2.next
    pt1.next = temp2.next
    pt2.next = temp1.next
    temp2.next.next


}
//console.log(list)


/*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/


// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function (num) {
    // your code goes here
    let result = -1
    let currentNode = this.root
    while (currentNode) {
        if (currentNode.key < num && currentNode.key > result) {
            result = currentNode.key
        }
        let direction = num > currentNode.key ? 'right' : 'left'
        currentNode = currentNode[direction]

    }
    return result
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function (key) {
    var root = this.root;

    // 1. If the tree is empty, create the root
    if (!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert the new node
    var currentNode = root;
    var newNode = new Node(key);

    while (currentNode !== null) {
        if (key < currentNode.key) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(17);

console.log("Largest smaller number is " + result);
