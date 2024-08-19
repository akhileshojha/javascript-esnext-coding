//Write a JavaScript function that implements throttling.
/**
 * Creates a throttled version of a function that limits the number of times it can be called within a specified time frame.
 *
 * @param {function} func - The function to be throttled.
 * @param {number} limit - The time frame in milliseconds during which the function can be called only once.
 * @return {function} - The throttled function.
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  

// Example usage
const log = throttle(() => console.log('Throttled!'), 1000);
window.addEventListener('scroll', log);


