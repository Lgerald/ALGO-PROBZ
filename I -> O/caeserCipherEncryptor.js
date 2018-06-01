/*
Question: Given a non-empty string of lowercase letters and a non-negative integer value represneding a key, write a functio nthat returns a new string obtainted by shifting every letter in the input string by K positions in the alphabet where k is the key. note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1 returns the letter "a"
*/


//ASCII SOLUTION
//O(n) time | O(n) space
function caeserCipherEncryptor(str, key) {
    // intitalize an array to contain solution
    const newLetters = []
    // if the key is a big number (ie 54), we want the remainder
    // otherwise we want the number is smaller, it will be the remainder so all is well
    const newKey = key % 26
    // loop thru our str
    for (const letter of str) {
        // add the ciphered letter to result array
        newLetters.push(getNewLetter(letter, newKey))
    }
    //return the ciphered letters
    return newLetters.join('')
}

function getNewLetter(letter, key) {
    // new letter code needs to be update via the mod of the key
    const newLetterCode = letter.charCodeAt() + key
    // we're never going to be below 97, so we only have to worry about the upper bounds
    // it we get a new code thats bigger than the max, mod that num by 122 --> get the remainder, and add it to 96 (the thing that comes right before a -> aka the zero of the unicode alphabet) eg if we have 123 -> that should go to a, 123 % 122 = 1 + 96 = 97 = a
    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + newLetterCode % 122)
}


//MAKE UR OWN ALPHABET SOLUTION
//O(n) time | O(n) space
function caeserCipherEncryptor(str, key) {
	// intitalize an array to contain solution
	const newLetters = []
	// mod ur current key by 26, cause theres ony 26 letters
    const newKey = key % 26
    //make the alphaet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	// loop thru our str
	for (const letter of str) {
		// add the ciphered letter to result array
		newLetters.push(getNewLetterB(letter, newKey, alphabet))
	}

	//return the ciphered letters
	return newLetters.join('')
}

function getNewLetterB(letter, key, alphabet) {
	// new letter code needs to be update via the mod of the key
	const newLetterCode = alphabet.indexOf(letter) + key
	return newLetterCode <= 25
		? alphabet[newLetterCode]
		: alphabet[-1 + newLetterCode % 25]
}
