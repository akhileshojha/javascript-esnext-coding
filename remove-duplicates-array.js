//Write a JavaScript function to remove duplicates from an array.
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//other method
function removeDuplicates2(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates2([1, 2, 3, 4, 4, 5, 5]));
