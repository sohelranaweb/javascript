# What is Scope in JavaScript?

## Definition

**Scope** in JavaScript defines **where a variable can be accessed or used** within a program. It controls the visibility and lifetime of variables.

In simple terms, scope answers this question:

> "From which part of the code can I use this variable?"

---

## Example Code

```js
let message = "Hello World"; // Global scope

function greet() {
  let name = "Sohel"; // Function scope
  console.log(message); // Accessible
  console.log(name); // Accessible
}

greet();

console.log(message); // Accessible
// console.log(name); // ❌ ReferenceError
```

---

## Explanation

1. `message` is declared outside any function.

   - It is in the **global scope**.
   - It can be accessed from anywhere in the program.

2. `name` is declared inside the `greet()` function.

   - It is in the **function scope**.
   - It can only be accessed inside that function.

3. When JavaScript tries to access a variable:

   - It first looks in the current scope.
   - If not found, it looks in the outer scope.
   - This process is called the **scope chain**.

---

## Why Scope Is Important

- Prevents variable name conflicts
- Makes code more secure and predictable
- Helps manage memory efficiently
- Improves code readability and maintainability

---

## Key Points

- Scope controls variable accessibility
- JavaScript has global, function, and block scope
- Variables are only accessible within their defined scope

---

**Short Answer for Interviews:**
Scope in JavaScript determines where variables can be accessed in a program. It helps control visibility and prevents unwanted access to variables.
