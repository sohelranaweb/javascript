// to remove all falsy values from an array in JavaScript
const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];
const filtered = arr.filter(Boolean);
// console.log(filtered);

// 2. What is the output?
const arr2 = [1, 2, 3];
const result = arr2.map((n) => {
  n * 2;
});
console.log(result);
