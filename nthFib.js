/*question: the fibonnacci sequence is defined as follows: the first number ofthe sequence is 0, the second number is 1 and tne nth number is the sum of (n-1) and (n-2)th numbers. write a function that takes in an integer n and returns the nth fibonacci number (ie input - 6 output - 5 because the 6th fibonnaci number is 5) */

//most brute forciest of solutions
// adds so much to the callstack potentially, so we would run out of space
// time  O(2^n) | space O(n)
function getNthFib(n) {
    if (n === 1) {
        return 0
    } else if (n === 2) {
        return 1
    } else {
        return (getNthFib(n-2) + getNthFib(n-1))
    }
}

//memoizing
// O(n) time | O(n) space
function getNthFib(n, memoize = {1: 0, 2: 1}) {
    // if our solution is in the cache, return it
    if (n in memoize) {
        return memoize[n]
    } else {
        // otherwise, store the next fibonnaci number, and return it
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
        // that way any calculations we already made, we retrieve from the cache
        // anything that comes from the hash table is recovered in constant time
        // only calculating each fib number once
        return memoize[n]
    }
}

//optimized : iterative
// O(n) time | O(1) space
function getNthFib(n) {
    // array of last two fib numbers
    const lastTwo = [0, 1]
    let counter = 3
    // keep track of how many calculations we've done
    while (counter >= n) {
        // the next number will always be equal to the last two
        const nextFib = lastTwo[0] + lastTwo[1]
        // lasttwo[0] goes to gargabge disposal
        lastTwo[0] = lastTwo[1]
        // put new fib in last two second val
        lastTwo[1] = nextFib
        // increment where we are in fibonacci sequence
        counter++
    }
    // once we've calculated n fibonacci numbers, we can return whatever value was stored in the last two of the array
    // if n is 0, we return 0, so we return the first value in the array, otherwise return what we retireved from the loop?
    return n > 1 ? lastTwo[1] : lastTwo[0]
}