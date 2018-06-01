/*
given a list of numbers, sort it by:
dividing it into two seperate lists (sorted, unsorted)
@ beggining - unsorted list = our entire list
iterate thru unsorted several times
each time find smallest num in unsorted --> append to sorted sublist
keep doing that until we no longer have unsorted sublist
all happens in place
implementation
-> pointer @ oth index of unsorted list
traver arr to find smaller
after one go thru -> pointer pointed to current smallest
swap that val w/ 0th index
do the same thing over and over w/ the first value of our unsorted list until we no longer have an unsorted sublist


*/

function selectionSort(array) {
    // Write your code here.
    let currIdx = 0
    while (currIdx < array.length - 1) {
        let smolIdx = currIdx
        for (let i = currIdx + 1; i < array.length; i++) {
            if (array[i] < array[smolIdx]) {
                smolIdx = i
            }
        }
        swap(currIdx, smolIdx, array)
        currIdx++
    }
    return array
}

function swap(i, j, array) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}