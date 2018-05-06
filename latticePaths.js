/*question:Given a square grid, how could you determine the number of possible paths from the top left of the grid to the bottom right, assuming you can only move to the right and down? */

var paths = {};
function memoizer(x, y, max) {
    if (paths[[x, y, max]]) {
        return paths[[x, y, max]];
    }
    else {
        return paths[[x, y, max]] = paths2Bottom(x, y, max);
    }
}
function paths2Bottom(x, y, max) {
    if (x === max || y === max) {
        return 1;
    }
    return memoizer(x + 1, y, max) + memoizer(x, y + 1, max);
}
//paths2Bottom(0, 0, 20);

//without global var
function memoizer(x, y, max, paths = {}) {
	if (paths[[x, y, max]]) {
		return paths[[x, y, max]]
	} else {
		return (paths[[x, y, max]] = paths2Bottom(x, y, max, paths))
	}
}
function paths2Bottom(x, y, max, paths) {
	if (x === max || y === max) {
		return 1
	}
	return memoizer(x + 1, y, max, paths) + memoizer(x, y + 1, max, paths)
}

//less lines
function memoizer(x, y, max, paths = {}) {
	if (paths[[x, y, max]]) return paths[[x, y, max]]
	else return (paths[[x, y, max]] = paths2Bottom(x, y, max, paths))
}
function paths2Bottom(x, y, max, paths) {
	if (x === max || y === max) return 1
	return memoizer(x + 1, y, max, paths) + memoizer(x, y + 1, max, paths)
}

//1 function solution?

function paths2Bottom(x, y, max, meme = {}) {
    if (meme[[x, y, max]]) return meme[[x, y, max]]
    if (x === max || y === max) {
        return 1
    }
    let possiblePath = paths2Bottom(x + 1, y, max, meme) + paths2Bottom(x, y + 1, max, meme)
    meme[[x, y, max]] = possiblePath
    return possiblePath
}