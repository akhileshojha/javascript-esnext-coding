//Write a JavaScript function to find the factorial of a given number.
/**
 * Calculates the factorial of a given number.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @return {number} The factorial of the given number.
 */
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

function factorial2(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial2(5));
