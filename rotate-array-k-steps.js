//Write a function to rotate an array by k steps.

/**
 * Rotates an array by a specified number of steps.
 *
 * @param {array} arr - The input array to be rotated.
 * @param {number} k - The number of steps to rotate the array.
 * @return {array} The rotated array.
 */
function rotateArray(arr, k) {
  let result = [...arr];
  for (let i = 0; i < k; i++) {
    result.unshift(result.pop());
  }
  return result;
}
console.log(rotateArray([1, 2, 3, 4, 5], 3));
console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], 0));

function rotateArray2(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateArray2([1, 2, 3, 4, 5], 3));
console.log(rotateArray2([1, 2, 3, 4, 5], 1));
console.log(rotateArray2([1, 2, 3, 4, 5], 0));