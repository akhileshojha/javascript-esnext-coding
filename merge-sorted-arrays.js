//Write a function that merges two sorted arrays into a single sorted array.

/**
 * Merges two sorted arrays into a single sorted array.
 *
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @return {number[]} A new sorted array containing all elements from both input arrays.
 */
function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

function mergeSortedArrays2(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays2([1, 3, 5], [2, 4, 6]));

function mergeSortedArrays3(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays3([1, 3, 5], [2, 4, 6]));

