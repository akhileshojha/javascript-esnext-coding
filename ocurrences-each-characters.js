//Write a JavaScript function that counts the occurrences of each character in a string.

function countOccurrences(str) {
    const count = {};
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]]) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }
    return count;
}

console.log(countOccurrences("hello"));

function countOccurrences2(str) {
    const counts = {};
    for (let char of str){
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    return counts;
}
console.log(countOccurrences2("hello"));