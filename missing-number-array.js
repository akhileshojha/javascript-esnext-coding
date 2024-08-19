//Write a function to find the missing number in an array of n consecutive numbers.

/**
 * Finds the missing number in an array of n consecutive numbers.
 *
 * @param {number[]} arr - An array of consecutive numbers with one missing number.
 * @return {number} The missing number in the array.
 */
function missingNumber(arr) {
    const n = arr.length + 1;
    const sum = n * (n + 1) / 2;
    return sum - arr.reduce((a, b) => a + b, 0);
}

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
