//Find the Fibonacci Sequence up to n terms

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}       

console.log(fibonacci(10));
