//Write a function that returns the sum of all arguments passed to it.
function sumOfArguments(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function sumOfArguments2() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfArguments2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function sumOfArguments3() {
  return [...arguments].reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfArguments3(1, 2, 3, 4, 5));
