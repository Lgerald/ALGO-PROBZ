var minStack = function() {
    this.stack = []
}

minStack.prototype.minPush = function(x) {
    let min = this.stack.length > 0 ? this.stack[this.stack.length - 1].min : x
    this.stack.push({
        val: x,
        min: Math.min(min, x)
    })
}

minStack.prototype.minPop = function() {
    let x = this.stack.pop()
    return x ? x.val : null;
}

minStack.prototype.top = function() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1].val : null
}

minStack.prototype.getMin = function() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1].min : null
}