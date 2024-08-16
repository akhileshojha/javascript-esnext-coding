//console.log([1, 2, 3] + [4, 5, 6]);

const arr = [1, 2, 3, 4];

//for loop
for (let i = 0; i < arr.length; i++) {
  console.log('for', arr[i]);
}

//forEach
arr.forEach((item) => console.log('forEach', item));

//using for...of
for (const item of arr) {
  console.log('for of', item);
}

//using map
const doubled = arr.map((item) => item * 2);
console.log('map', doubled);

//using reduce
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log('reduce', sum);
