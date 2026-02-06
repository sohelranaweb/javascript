# The usage of arrays in Javascript

---

## Definition: What is an Array in JavaScript?

An **array** in JavaScript is a data structure that allows you to store **multiple values in a single variable**, arranged in an ordered list.  
Each value inside an array is called an **element**, and each element has a numeric position called an **index**, starting from `0`.

Example:

```js
let fruits = ["Apple", "Banana", "Mango"];
```

## Why Do We Need Arrays in JavaScript?

Arrays exist to solve a very practical problem: **managing multiple related pieces of data efficiently**.

Without arrays, you would need to create many separate variables:

```js
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

### Problems with This Approach

This approach quickly becomes a problem because it is:

- hard to maintain
- difficult to loop through
- not scalable as data grows

### How Arrays Solve These Issues

Arrays solve these issues by:

- keeping related data together in one place
- making code cleaner and easier to read
- allowing simple operations like looping, searching, filtering, and transforming data
- helping JavaScript handle real-world data such as lists of users, products, or messages

### Summary

In short, arrays make your code **organized, scalable, and powerful**.

---

## Array Methods in JavaScript: push, pop, shift, unshift

These methods are used to **add or remove elements** from an array.  
They directly **modify the original array**.

---

### 1. push() – Add Element to the End of an Array

**What it does:**  
`push()` adds one or more elements to the **end** of an array.

**Why it is useful:**  
Use `push()` when you want to add new data at the end of a list, such as adding items to a cart or new messages to a chat.

**Example:**

```js
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
// ["Apple", "Banana", "Mango"]
```

### 2. pop() – Remove Element from the End of an Array

**What it does:**  
`pop()` removes the **last element** from an array and returns that element.

**Why it is useful:**  
Use `pop()` when you want to remove the **most recently added item** from a list.

**Example:**

```js
let fruits = ["Apple", "Banana", "Mango"];

let removedFruit = fruits.pop();

console.log(removedFruit);
// "Mango"

console.log(fruits);
// ["Apple", "Banana"]
```

### 3. unshift() – Add Element to the Beginning of an Array

**What it does:**  
`unshift()` adds one or more elements to the **start** of an array.

**Why it is useful:**  
Use `unshift()` when new data should appear at the **beginning** of a list, such as adding a new task at the top of a task list.

**Example:**

```js
let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
// ["Apple", "Banana", "Mango"]
```

### 4. shift() – Remove Element from the Beginning of an Array

**What it does:**  
`shift()` removes the **first element** from an array and returns that element.

**Why it is useful:**  
Use `shift()` when you want to remove the **oldest or first item** from a list.

**Example:**

```js
let fruits = ["Apple", "Banana", "Mango"];

let removedFruit = fruits.shift();

console.log(removedFruit);
// "Apple"

console.log(fruits);
// ["Banana", "Mango"]
```

### Quick Summary

- `push()` → add element to the **end** of an array
- `pop()` → remove element from the **end** of an array
- `unshift()` → add element to the **beginning** of an array
- `shift()` → remove element from the **beginning** of an array

These methods are very common in real-world JavaScript applications.
