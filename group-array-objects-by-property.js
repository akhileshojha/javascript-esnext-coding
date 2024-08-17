//Write a function to group an array of objects by a specific property.
function groupByProperty(arr, property) {
  return arr.reduce((groups, item) => {
    const val = item[property];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 },
];
console.log(groupByProperty(people, "age"));

function groupByProperty2(arr, property) {
  return arr.reduce((groups, item) => {
    const val = item[property];
    if (!groups[val]) {
      groups[val] = [];
    }
    groups[val].push(item);
    return groups;
  }, {});
}
console.log(groupByProperty2(people, "age"));
