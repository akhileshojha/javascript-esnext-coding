//Check if a Number is Prime

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));

console.log(isPrime(0));

console.log(isPrime(7));

console.log(isPrime(10));

