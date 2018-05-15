/*QUESTION: implement a class for a least recently used cache. the cache should support inserting key/value pairs, retreiving a keys value, and retreiving the most recently "active" key. each of these methods should run in constant time. when a key/value pair is inserted or a keys value is retreived, the key in question should become the most resent key. also, the lru cache class should store a max size property set to the size of the cache, which is passed in as an argumentnt during instantiations. the size represents the maximum number of key/value pairs that the cach can hold at once. if a key/valye pair is added to the cache when it has reached maximum capacity, the least recently used "active" key/value pair should effectively replace it. inserting a key valye pair with an already existing key should simply replace the keys value in the cache with the new value and should not evict a key/value pair if the cache is full. attempting to retreive a value from a key that is not in the cahce should return the null value */



// cache class
class LRUCache {
    constructor(maxSize) {
        this.cache = {}
        this.maxSize = maxSize || 1
        this.currentSize = 0
        this.MostRecentList = new DoublyLinkedList()
    }
    insertKeyValuePair(key, value) {
        if (!(key in this.cache)) {
            // if we've reached out max size ONE MUST GO
            if (this.currentSize === this.maxSize) {
                this.evectLeastRecent()
            } else {
                this.currentSize++
            }
            // if we add to our size, or evict, we must create a new key/value that is a doubly linked list
            this.cache[key] = new DoublyLinkedListNode(key, value)
        } else {
            // if the key is already in the cache we must replace the value at the key
            this.replaceKey(key, value)
        }
        // no matter what happens, gotta update the most recent
        this.updateMostRecent(this.cache[key])
    }
    getValueFromKey(key) {
        // if its not there, u cant get it
        if (!(key in this.cache)) return null
        // this was the most recent accessed now
        this.updateMostRecent(this.cache[key])
        //return the value at the key
        return this.cache[key].value
    }
    getMostRecentKey() {
        // our cache is an obj and a DLL, therefore we can access the first, by just accessing the head of our most recent list
        return this.MostRecentList.head.key
    }
    evictLeastRecent() {
        const keyToRemove = this.MostRecentList.tail.key
        this.MostRecentList.removeTail()
        delete this.cache[keyToRemove]
    }
    updateMostRecent(node) {
        this.MostRecentList.setHeadTo(node)
    }
    replaceKey(key, value) {
        if (!(key in this.cache)) {
            throw new Error("the keys not in the cache!")
        }
        // update the key value pair
        this.cache[key].value = value
    }
}

//doubly linked list class
class DoublyLinkedList {
    //list constructor
    constructor() {
        this.head = null
        this.tail = null
    }
    setHeadTo(node) {
        // if this is the head return
        if (this.head === node) {
            return
        // if there is no head: this node is the head and the tail
        } else if (this.head === null) {
            this.head = node
            this.tail = node
        // if we already have head AND ONLY one head
        } else if (this.head === this .tail) {
            //tail prev pointer to new head
            this.tail.prev = node
            // new head is node
            this.head = node
            // new heads next is tail
            this.head.next = this.tail
        // otherwise if we have a list w/ more than one value
        } else {
            // if ita the tail, get rid of it?
            if (this.tail === node) this.removeTail()
            // remove all pointers??
            node.removeBindings()
            // the current head is now pointing to new head
            this.head.prev = node
            // the next of new head is the old head
            node.next = this.head
            // the new head is now the new head
            this.head = node
        }
    }
    removeTail() {
        // if we dont have a tail just dont
        if (this.tail === null) return
        // if we only have one RESET
        if (this.tail === this.head) {
            this.head = null
            this.tail = null
            return
        }
        // whatever came before the tail is the new tail
        this.tail = this.tail.prev
        // and the tail no longer has a next
        this.tail.next = null
    }

}

//doubly linked list NODE class
class DoublyLinkedListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
    removeBindings() {
        // if there is still something attached...
        if (this.prev !== null) {
            // get rid of it by setting its prevs next to the current next
            this.prev.next = this.next
        }
        // same with the next
        if (this.next !== null) {
            this.next.prev = this.prev
        }
        this.prev = null
        this.next = null
    }
}