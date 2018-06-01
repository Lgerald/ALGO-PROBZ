// add together any number of args
const add = (...args) => args.reduce((acc, curr) => acc + curr)

// multiply together any number of args
const multiply = (...args) => args.reduce((acc, curr) => acc * curr)

// make a function that takes a func, and returns a new version of that func that can only successfully be called every third time
const everyThirdTime = func => {
    let count = 3
    return function (...args) {
        if (count === 3) {
            count = 0
            return func(...args)
        }
        count++
    }
}

// make a function that takes a func, and returns a new version of that func that can only successfully be called once a 'cooldown' period has elapsed since it was last successfully executed.
const throttle = (func, milliseconds) => {
    let time = Date.now() - milliseconds;
    return function (...args) {
        if (Date.now() - time >= milliseconds) {
            let res = func(...args)
            time = Date.now()
            return res
        }
    }
}

// make a function that takes a func, and returns a new version of that func that can only successfully be called once. If we call it again with different args, it just returns the same result from the first (and only) successful call
const oneAndDone = (func) => {
    let res;
    return (...args) => {
        if (!res) res = func(...args)
        return res
    }
}

// I want to be able to call *multiply* with any number of args. If I call it with fewer than 3 args, it will return a function to me that will accept the remainder of the params. When it has three of more params, it will multiply them together
const partialMultiply = (...args) => {
    if (args.length >= 3) return multiply(...args)
    return partialMultiply.bind(null, ...args)
}

// A more generic way of making partialMultiply. This function accepts a function, and returns a partial application version of it that waits until it has numParams before it actually invokes 
const makePartial = (func, numParams) => {
    return function partialFunc(...args) {
        if (args.length >= numParams) return func(...args)
        return partialFunc.bind(null, ...args)
    }
}

// woah, that kind of sounded complicated, so here are some examples:
myPartialMultiply = makePartial(multiply, 3)
myPartialMultiply(2)(2)(2) //returns the answer
myPartialMultiply(3, 4) // returns a function that accepts the final param

// it's good because now I can use 'makePartial' to make any function use partial application.
myPartialAdd = makePartial(add, 5)

// If the original function always accepts a certain number of arguments (e.g. 3), we can modify makePartial so it doesn't need numParams:
// e.g. if:
addThreeNums = (a, b, c) => a + b + c
// then:
const anotherMakePartial = (func) => {
    return function partialFunc(...args) {
        if (args.length === func.length) return func(...args)
        return partialFunc.bind(null, ...args)
    }
}



