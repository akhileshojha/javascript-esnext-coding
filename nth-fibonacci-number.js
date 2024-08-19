//Write a JavaScript function to get the nth Fibonacci number.
/**
 * Generates the nth Fibonacci number.
 *
 * @param {number} n - The position of the Fibonacci number to generate.
 * @return {number} The nth Fibonacci number.
 */
function getNthFibonacci(n) {
   if(n<=1) return n;
   let a = 0, b = 1, temp;
   for(let i = 2; i <= n; i++) {
       temp = a + b;
       a = b;
       b = temp;
   }
   return b;
}

console.log(getNthFibonacci(10));
console.log(getNthFibonacci(7));
