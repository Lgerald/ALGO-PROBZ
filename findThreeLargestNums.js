function findThreeLargestNumbers(array) {
    // Write your code here.
    return (array.sort((a, b) => a - b).slice(array.length - 3, array.length))
}

//O(N) time | O(1) space

function findThreeLargestNumbers(array) {
    const threeLargest = [null, null, null]
    for (const num of array) {
        updateLargest(threeLargest, num)
    }
}

function updateLargest(threeLargest, num) {
    if (threeLargest[2] === null || num > threeLargest[2]) {
        shiftAndUpdate(threeLargest, num, 2)
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
        shiftAndUpdate(threeLargest, num, 1)
    } else if (threeLargest[0] === null || num > threeLargest[0]) {
        shiftAndUpdate(threeLargest, num, 0)
    }
}

function shiftAndUpdate(array, num, idx) {
    // loop thru base  arr
    for (let i = 0; i < idx; i++) {
        // if we're at it, assign the number
        if (i === idx) {
            array[i] = num
        // otherwise, shift all the values to the next one
        } else {
            array[i] = array[i+1]
        }
    }
}