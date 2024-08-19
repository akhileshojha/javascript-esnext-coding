//Write a JavaScript function to flatten an object with nested properties.
/**
 * Flattens an object with nested properties into a single-level object.
 *
 * @param {Object} obj - The object to be flattened.
 * @return {Object} - The flattened object.
 */
function flattenObject(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (typeof value === "object") {
      Object.keys(value).forEach((subKey) => {
        acc[`${key}.${subKey}`] = value[subKey];
      });
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}

const obj = {
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

console.log(flattenObject(obj));

/**
 * Recursively flattens a nested object into a single-level object.
 *
 * @param {Object} obj - The object to be flattened.
 * @param {string} [parent=""] - The parent key for the current object.
 * @param {Object} [res={}] - The result object.
 * @return {Object} - The flattened object.
 */
function flattenObject2(obj, parent = "", res = {}) {
  for (let key in obj) {
    const propName = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === "object") {
      flattenObject2(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }

  return res;
}

console.log(flattenObject2(obj));
