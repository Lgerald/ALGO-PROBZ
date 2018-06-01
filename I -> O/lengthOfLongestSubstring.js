
/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

var lengthOfLongestSubstring = function (s) {
    let result = []
    let current = ''
    for (let i = 0; i < s.length; i++) {
        if (current.includes(s[i])) {
            result.push(current)
            current = current.slice(current.indexOf(s[i]))
        } else {
            current += s[i]
        }
    }
    return result.reduce((a, b) => a.length > b.length ? a : b)
};