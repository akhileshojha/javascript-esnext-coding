//Write a JavaScript function to find the longest word in a given string.

function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function findLongestWord2(str) {
  const words = str.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord2("The quick brown fox jumped over the lazy dog"));
