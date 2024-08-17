//Write a JavaScript function to find the longest word in a given string.

function findLongestWordLength(str) {
    let words = str.split(" ");
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

