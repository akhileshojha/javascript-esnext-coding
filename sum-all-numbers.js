//Write a function that takes an array of two numbers and returns the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
    const [min, max] = [Math.min(...arr), Math.max(...arr)];
    let sum = 0;
    //let start = Math.min(arr[0], arr[1]);
    //let end = Math.max(arr[0], arr[1]);
    //let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4]));
