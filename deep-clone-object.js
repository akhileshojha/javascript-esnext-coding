//Write a JavaScript function to deep clone an object.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: {
    g: 5,
    h: 6,
  },
};
const copy = deepClone(original);
console.log(copy);
console.log(copy === original);

/**
 * Creates a deep copy of the provided object.
 *
 * @param {Object} obj - The object to be cloned.
 * @return {Object} A deep copy of the original object.
 */
function deepClone2(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepClone2);
  }
  const cloneObj = {};
  for (let key in obj) {
    cloneObj[key] = deepClone2(obj[key]);
  }
  return cloneObj;
}
const copy2 = deepClone2(original);
console.log(copy2);
console.log(copy2 === original);
