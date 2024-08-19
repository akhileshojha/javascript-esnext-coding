//Write a JavaScript function to check if a string contains all unique characters.
/**
 * Checks if a string contains all unique characters.
 *
 * @param {string} str - the input string to check
 * @return {boolean} true if the string contains all unique characters, false otherwise
 */
function uniqueChars(str) {
    let unique = true;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                unique = false;
                break;
            }
        }
    }
    return unique;
}

console.log(uniqueChars("abcde"));
console.log(uniqueChars("abcda"));

function uniqueChars2(str) {
    let unique = true;
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            unique = false;
            break;
        }
    }
    return unique;
}

console.log(uniqueChars2("abcde"));
console.log(uniqueChars2("abcda"));

function uniqueChars3(str) {
    const charSet = new Set();
    for(let char of str) {
        if(charSet.has(char)) return false;
        charSet.add(char);
    }
    return true;
}
console.log(uniqueChars3("abcde"));
console.log(uniqueChars3("abcda"));


