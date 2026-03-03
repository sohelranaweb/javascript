// const cart = [
//   { name: "Book", outOfStock: false },
//   { name: "Pen", outOfStock: true },
// ];

// const hasOutOfStock = cart.some((item) => item.outOfStock);

// if (hasOutOfStock) {
//   // stop checkout

// }

// console.log(hasOutOfStock);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let removeArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 6) {
//     // removeArr.push(arr.shift());
//   } else {
//     break;
//   }
// }

// let removeArr = arr.filter((num) => num < 6);
// console.log(removeArr);

// 2. Show how to flatten a nested array, or how to convert it into a single array.

// 1. Buit-in method flat
const arr = [2, 3, [4, 5, [4, 6]]];
// const flattenArra = arr.flat(Infinity);
// console.log(flattenArra);

// 2. Recursive way 
