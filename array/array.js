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
// const arr = [2, 3, [4, 5, [4, 6]]];
// const flattenArra = arr.flat(Infinity);
// console.log(flattenArra);

// 2. Recursive way
// function flattendArray(array) {
//   let res = [];
//   for (const item of array) {
//     if (Array.isArray(item)) {
//       res.push(...flattendArray(item));
//     } else {
//       res.push(item);
//     }
//   }
//   return res;
// }

// const arr = [2, 3, [4, 5, [4, 6]]];
// console.log(flattendArray(arr));

// 3. Remove duplicates from an array in JavaScript while keeping the original order.
// 3.1 Set
// const arr = [1, 2, 2, 3, 1, 4, 4];
// const unique = [...new Set(arr)];
// console.log(unique);

// 3.2
// let unique = [];
// for (let i of arr) {
//   if (!unique.includes(i)) {
//     unique.push(i);
//   }
// }

// console.log(unique);

// 3.3
// const unique = (arr) =>
//   arr.filter((item, index) => arr.indexOf(item) === index);
// const arr = [1, 2, 2, 3, 1, 4, 4];
// console.log(unique(arr));

// 3.4
// const unique = (arr) =>
//   arr.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), []);
// const arr = [1, 2, 2, 3, 1, 4, 4];
// console.log(unique(arr));



// 4. The usage of Unary function
const cart = [
  { name: "Book", price: 200 },
  { name: "Pendrive", price: 800 },
  { name: "Mouse", price: 500 },
];

const getPrice = (item) => item.price;
const addVat = (price) => price * 1.1;
const formatCurrency = (amount) => `${amount.toFixed(2)}`;
const finalPrice = cart.map(getPrice).map(addVat).map(formatCurrency);
console.log(finalPrice);
