//NOT YET SOLVED

function getShortestUniqueSubstring(arr, str) {
    let headIndex = 0
    let result = ""
    let uniqueCounter = 0
    let countMap = new Map()

    //initialize countMap
    for (let i = 0; i < arr.length-1; i++) {
        countMap.set(arr[i], 0)
    } 

    // scan str
    for (let tailIndex = 0; tailIndex < str.length-1; tailIndex++) {
        //handle the new tail
        tailChar = str.charAt(tailIndex)
    }

    // skip all the characters not in arr
    if (!countMap.key(tailChar)) {
        continue
    }

    let tailCount = countMap.getValueOf(tailChar)
    if (tailCount == 0) {
        uniqueCounter = uniqueCounter + 1
    }

    countMap.set(tailChar, tailCount + 1)

    // push head forward
    while (uniqueCounter == arr.length) {
        tempLength = tailIndex - headIndex + 1
    }
    if (tempLength == arr.length) {
    // return a substring of str from
    // headIndex to tailIndex(inclusive)
    return str.substring(headIndex, tailIndex)
    }

    if (result == "" || tempLength < result.length) {
    // return a substring of str from
    // headIndex to tailIndex(inclusive)
    result = str.substring(headIndex, tailIndex)
    }
    let headChar = str.charAt(headIndex)

    if (countMap.key(headChar)) {
        let headCount = countMap.getValueOf(headChar) - 1
    }
    if (headCount == 0) {
        uniqueCounter = uniqueCounter - 1
    }
    countMap.set(headChar, headCount)

    headIndex = headIndex + 1

    return result
}



function getShortestUniqueSubstring(arr, str) {

    // let arrObj = {}
    let firstStrFound = ''
    let vReturn = ''
    //  for (let i = 0; i < arr.length; i++) {
    //    arrObj[i] = false;
    //  }

    ADOBECODEBANCDDD

    for (let x = 0; x < str.length; x++) {
        if (arr.includes(str[x]) && !vReturn.includes(str[x])) {
            vReturn += str[x];
            console.log("if " + vReturn)
            //purpose of this else if : handle scenario where we have letters after the unique letters?
            // return has a letter (ie if v return has anything in it) AND if this letter is not a part of the unique subset
        } else if (!arr.includes(str[x]) && vReturn.length) {
            vReturn += str[x]
            console.log("else if " + vReturn)
        } else {
            // once we have a duplicate, remove the dublicate, NOT the entire string
            if (firstStrFound.length > vReturn.length) {
                firstStrFound = vReturn;
            } else {
                vReturn = ''
            }
        }
    }
    return vReturn;
}

//another attempt

function getShortestUniqueSubstring(arr, str) {
    //store all potential substrings in an array and return the shortest
    let potentialSubs = []
    let vReturn = ""

    for (let x = 0; x < str.length; x++) {
        // if it is one of our unique values, and it is not alredy in our potential return
        if (arr.includes(str[x]) && !vReturn.includes(str[x])) {
            // add it to the potential return string
            vReturn += str[x];
            console.log("if " + vReturn)
            //purpose of this else if : handle scenario where we have letters after the unique letters?
            // return has a letter (ie if v return has anything in it) AND if this letter is not a part of the unique subset
        } else if (!arr.includes(str[x]) && vReturn.length) {
            vReturn += str[x]
            console.log("else if " + vReturn)
            // if we've reached a case that doesnt satisfy any of those, we want to"
            // take the v return and push it into our potentials,
            // cut off the part thats causing it to fail (ie the duplicate)
            // reset the vreturn to equal the substring minus the duplicate
            //continue
        } else {
            potentialSubs.push(vReturn)
            vReturn += str[x]
            console.log("else before chop", vReturn)
            vReturn = vReturn.slice(1)
            // chop off first substring up to next value that satisfies potential substring
            for (let j = 0; j < vReturn.length; j++) {
                if (!arr.includes(vReturn[j])) {
                    vReturn = vReturn.slice(1)
                }
            }
            potentialSubs.push(vReturn)

            console.log("else after chop", vReturn)


        }
        potentialSubs.push(vReturn)

    }
    potentialSubs.map(sub => {
        if (arr.includes(sub)) {

        } else {
            sub.slice()
        }
    })
    console.log("potential subs", potentialSubs)
    return (potentialSubs.length >= 1) ? potentialSubs.reduce((a, b) => a.length <= b.length ? a : b) : vReturn
}