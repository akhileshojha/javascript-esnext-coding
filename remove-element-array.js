//Write a JavaScript function to remove all occurrences of a specific element from an array.

function removeElement(arr, val) {
    return arr.filter((item) => item !== val);
}   

console.log(removeElement([1, 2, 3, 4, 5], 3));

function removeElement2(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(removeElement2([1, 2, 3, 4, 5], 3));

function removeElement3(arr, val) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeElement3([1, 2, 3, 4, 5], 3));