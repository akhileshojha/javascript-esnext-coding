//Write a JavaScript function to check if two strings are anagrams of each other.

const anagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}   

console.log(anagrams('listen', 'silent'));

console.log(anagrams('hello', 'world'));

const anagrams2 = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const str1Map = {};
    const str2Map = {};
    for (let i = 0; i < str1.length; i++) {
        str1Map[str1[i]] = (str1Map[str1[i]] || 0) + 1;
        str2Map[str2[i]] = (str2Map[str2[i]] || 0) + 1;
    }
    for (let key in str1Map) {
        if (str1Map[key] !== str2Map[key]) return false;
    }
    return true;
}

console.log(anagrams2('listen', 'silent'));
console.log(anagrams2('hello', 'world'));