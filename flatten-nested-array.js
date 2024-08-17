//Write a JavaScript function to flatten a nested array.
function flattenArray(arr) {
    return arr.flat();
}
console.log(flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function flattenArray2(arr) {
    return [].concat(...arr);
}
console.log(flattenArray2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function flattenArray3(arr) {
    return [].concat.apply([], arr);
}
console.log(flattenArray3([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function flattenArray4(arr) {   
    return arr.reduce((a, b) => a.concat(b), []);
}   
console.log(flattenArray4([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function flattenArray5(arr) {   
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray5(val)) : acc.concat(val), []);
}   
console.log(flattenArray5([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function flattenArray6(arr) {   
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray6(val) : val), []);
}   
console.log(flattenArray6([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

