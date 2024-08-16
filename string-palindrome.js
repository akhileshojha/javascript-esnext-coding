//Write a function to check if a given string is a palindrome.

function isPalindrome(str) {
    let reversed = str
        .split("")
        .reverse()
        .join("");
    return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));