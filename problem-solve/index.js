// to remove all falsy values from an array in JavaScript
const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];
const filtered = arr.filter(Boolean);
console.log(filtered);
