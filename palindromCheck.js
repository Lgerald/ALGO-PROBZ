/* write a function that takes in a non-empty string and returns a boolean representing whether or not the string is a palindrome. a palindrome is defined as a string that is written the same forward and backward */

function isPalindrome(string) {
    let left = 0
    let right = string.length - 1
    while (left <= right) {
        if (string[left] !== string[right]) return false
        left++
        right--
    }
    return true
}