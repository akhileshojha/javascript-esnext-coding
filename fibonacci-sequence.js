//Find the Fibonacci Sequence up to n terms
/**
 * Generates the Fibonacci sequence up to the nth number.
 *
 * @param {number} n - The number of elements in the Fibonacci sequence.
 * @return {number[]} The Fibonacci sequence as an array of numbers.
 */
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}       

console.log(fibonacci(10));
