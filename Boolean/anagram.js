
//w/ hashmap
var isAnagram = function (s, t) {
    // IF OUR WORDS ARE THE SAME LENGTH
    if (s.length === t.length) {
        // CREATE A HASHMAP FOR EACH WORD
        var map_s = {};
        var map_t = {};
        // LOOP THRU FILLING THE HASHMAP WITH TRUTHY VALUES FOR EACH LETTER (1)
            // IF ITS NOT ALREADY THERE START AT ZERO AND ADD ONE
        // IF THE LETTERS ALREADY THERE LETS ADD ANOTHER + 1
        for (let i = 0; i < s.length; i++) {
            map_s[s[i]] = (map_s[s[i]] || 0) + 1;
            map_t[t[i]] = (map_t[t[i]] || 0) + 1;
        }
        // IF THE KEY/VALUE PAIRS DONT ADD UP YOU DONT HAVE AN ANAGRAM
        for (let i = 0; i < s.length; i++) {
            if (map_s[s[i]] !== map_t[s[i]]) {
                return false;
            }
        }
        // IF YOU MAKE IT THROUGH ALL THAT YOU DO HAVE AN ANAGRAM
        return true;
    }
    // IF U DONT HAVE LENGTH U DONT HAVE AN ANAGRAM
    return false;
};

//super naive brute force
var isAnagram = function (s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};