//brute force
var reverse = function (x) {
    // math.abs - if its negative, lets not be
    // to string - so we can use string methods
    // split - to an array! so we can use array methods
    // reverse - turn it around
    // join - make it a string again
    // math.sign (return it to its original sign if it was negative)
    // parse int - turn it back into a number
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    // this part is to make sure its between 
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};

// 0(n)
var reverse = function (x) {
    // iz zero to start
    var result = 0
    // stores the sign
    var isNegative = x < 0 ? -1 : 1
    // if it is negative, we must make it positive for now, and reassign later
    x = x * isNegative

    // capture single digits (if x is a single digit return it, cause thats a palindrome)
    if (x / 10 < 1) {
        return x
    }

    // result (until x has been divided into oblivion, continue to divide it out and result)
    while (x >= 1) {
        // remainder = last number
        var diff = parseInt(x % 10)
        // add it to result and increase the 10's place of current value in result
        result = (result * 10) + diff
        // cut off part of x at the end and start anew
        x = x / 10
    }

    // if its too big -> capture greater than 32bit
    if (result > Math.pow(2, 31) - 1) {
        return 0;
    }

    // capture negative and RETURN
    return result * isNegative
};