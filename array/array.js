const cart = [
  { name: "Book", outOfStock: false },
  { name: "Pen", outOfStock: true },
];

const hasOutOfStock = cart.some((item) => item.outOfStock);

// if (hasOutOfStock) {
//   // stop checkout

// }

// console.log(hasOutOfStock);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let removeArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 6) {
    // removeArr.push(arr.shift());
  } else {
    break;
  }
}

let removeArr = arr.filter((num) => num < 6);
console.log(removeArr);
