/*
Flatten a Dictionary
A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

If a certain key is empty, it should be excluded from the output (see e in the example below).

Example:

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
Important: when you concatenate keys, make sure to add the dot character between them. For instance concatenating Key2, c and d the result key would be Key2.c.d.
Time Complexity: O(N), where N is the number of keys in the input dictionary. We visit every key in dictionary only once, hence the linear time complexity.

Space Complexity: O(N) since the output dictionary is asymptotically as big as the input dictionary. We also store recursive calls in the execution stack which in the worst case scenario could be O(N), as well. The total is still O(N).

*/

function flattenDictionary(dict) {
	// your code goes here
	const result = {}
	helper('', dict, result)
	return result
}

function helper(intialKey, dict, flatDict) {
	for (k in dict) {
		let value = dict[k]
		if (typeof value !== 'object') {
			if (intialKey === null || intialKey === '') {
				flatDict[k] = value
			} else if (k === '') {flatDict[intialKey] = value}
				else {flatDict[intialKey + '.' + k] = value}
		} else if (intialKey === null || intialKey === '') {
				helper(k, value, flatDict)
			} else {
				helper(intialKey + '.' + k, value, flatDict)
			}
	}
}

