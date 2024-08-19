//Write a JavaScript function that implements debouncing.
/**
 * Creates a debounced version of a function, delaying its execution by a specified time.
 *
 * @param {function} fn - The function to debounce.
 * @param {number} delay - The time in milliseconds to delay the function execution.
 * @return {function} The debounced function.
 */
function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function log(message) {
    console.log(message);
}

const debouncedLog = debounce(log, 1000);
debouncedLog("Hello");

function debounce2(fn, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
}

const debouncedLog2 = debounce2(log, 5000);
debouncedLog2("Hello"); 
