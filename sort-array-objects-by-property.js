//Write a function to sort an array of objects by a specific property.

function sortByProperty(arr, property) {
    return arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
}

const arr = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
];

console.log(sortByProperty(arr, 'age'));

function sortByProperty2(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
}

console.log(sortByProperty2(arr, 'age'));

function sortByProperty3(arr, property) {
    return arr.sort((a, b) => a[property] - b[property]);
}

console.log(sortByProperty3(arr, 'age'));