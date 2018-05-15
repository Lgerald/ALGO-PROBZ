function balancedBrackets(string) {
    // Write your code here.
    // create checkers, and a stack
    let openingBrackets = "{[("
    let closingBrackets = "}])"
    let matchingBrackets = { "}": "{", "]": "[", ")": "(" }
    let stack = []
    // loop thru string
    for (const char of string) {
        // if the first char is an opening bracet, push it to the stack
        if (openingBrackets.includes(char)) {
            stack.push(char)
        }
        // if we have a closing brack
        if (closingBrackets.includes(char)) {
            //	and the stack is empt- > return false
            if (stack.length === 0) {
                return false
            }
            // if -> see if last value in stack has the matching opening bracket -> pop it off and keep going
            if (stack[stack.length - 1] === matchingBrackets[char]) {
                stack.pop()
                // else return false
            } else {
                return false
            }
        }
    }
    // at the end, return true if stack.length === 0
    return stack.length === 0
}