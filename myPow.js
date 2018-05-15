var myPow = function (x, n, cache = { 0: 1, 1: x }) {

    if (cache[n]) return cache[n]
    else if (n === -1) {
        cache[n] = 1 / x
        return 1 / x
    }
    else if (n % 2 === 0) {
        const m = myPow(x, n / 2);
        cache[n] = m * m
        return m * m
    }
    else {
        cache[n] = x * myPow(x, n - 1)
        return x * myPow(x, n - 1);
    }
};
console.log(myPow(2, -10))

// Input: 2.00000, 10
// Output: 1024.00000