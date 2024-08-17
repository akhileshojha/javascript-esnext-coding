//Write a JavaScript function to find the intersection of two arrays (i.e., elements that are present in both arrays).

function intersection(arr1, arr2) {
    let intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }
    return intersection;
}

console.log(intersection([1, 2, 3], [2, 3, 4]));

function intersection2(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
}

console.log(intersection2([1, 2, 3], [2, 3, 4]));
