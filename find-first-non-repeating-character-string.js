//Write a JavaScript function to find the first non-repeating character in a string.
/**
 * Finds the first non-repeating character in a given string.
 *
 * @param {string} str - The input string to search for non-repeating characters.
 * @return {string|null} The first non-repeating character, or null if no such character exists.
 */
function findFirstNonRepeatingCharacter(str) {
    const charMap = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(findFirstNonRepeatingCharacter("saas"));
console.log(findFirstNonRepeatingCharacter("swiss"));

function findFirstNonRepeatingCharacter2(str) {
    const charMap = {};
    for (let char of str) {
        charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
    for (let char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(findFirstNonRepeatingCharacter2("howdy"));
console.log(findFirstNonRepeatingCharacter2("hello"));
