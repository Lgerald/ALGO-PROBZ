/* heap rules:
    1. completeness - binary tree has to have all levels filled completely, except last level which can be partially filled from left -> right)
    2. heap property:
        min heap: every node in heaps valie is smaller than or equal to its children nodes values
            (parentNode <= children)
        max heap: every nodes valie is greater than or equal to childent
            (parentNode >= children)
    finding relatives:
        currentNode = i
        left child = 2i + 1
        right child = 2i + 2
        parent = Math.floor((i-1) / 2)
*/

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        // find the first parent index(Math.floor(lastValinArr)-1 /2)
        const firstParentIdx = Math.floor(((array.length - 2) / 2))
        // loop thru array, starting at parent index, sifting down to the length of the array)
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array)
        }
        return array
    }
    // we need a start and end idx for this one
    siftDown(currentIdx, endIdx, heap) {
        // first look at left child
        let leftChildIdx = currentIdx * 2 + 1
        // while the left child is less than the end idx
        while (leftChildIdx <= endIdx) {
            // lest see if we have a right child, if we dont, assign it the value -1
            let rightChildIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
            let idxToSwap;
            // if the rigth child idx is NOT -1, and the left value is bigger
            if (rightChildIdx !== -1 && heap[leftChildIdx] > heap[rightChildIdx]) {
                // were gonna swap right
                idxToSwap = rightChildIdx
            } else {
                // otherwise we're going left
                idxToSwap = leftChildIdx
            }
            // if the swap value is less than the current value
            if (heap[idxToSwap] < heap[currentIdx]) {
                // do the swap
                this.swap(currentIdx, idxToSwap, heap)
                // reassign the current index to the idx we just swapped
                currentIdx = idxToSwap
                // reassign the left child to this idx's left (and repeat)
                leftChildIdx = currentIdx * 2 + 1
            } else {
                // we stop and return once we have reached a value that satisfies the heap prop
                return
            }
        }
    }
    // when sifting up, we're ending at the root, so we only need one idx
    siftUp(currentIdx, heap) {
        // find the parent
        let parentIdx = Math.floor((currentIdx - 1) / 2)
        // while our current idx is not the root AND the parent is bigger than the current value
        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            // swap
            this.swap(currentIdx, parentIdx, heap)
            // reassign the current idx to the parent
            currentIdx = parentIdx
            // get a new parent (and repeat)
            parentIdx = Math.floor((currentIdx - 1) / 2)
        }

    }

    peek() {
        return this.heap[0]
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap)
        let removedNode = this.heap.pop()
        this.siftDown(0, this.heap.length - 1, this.heap)
        return removedNode

    }

    insert(value) {
        this.heap.push(value)
        this.siftUp(this.heap.length - 1, this.heap)

    }
    swap(i, j, heap) {
        let temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp

    }
}