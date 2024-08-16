//Write a JavaScript function to find the factorial of a given number.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));
