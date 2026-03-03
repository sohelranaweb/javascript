// 1. find the first positive number
let array = [-10, -0.2, 0.3, -40, -50];

let foundPositiveN = array.find((item) => item > 0);
// console.log(foundPositiveN);

// 2. search for the first element in the array greater than 20
let array2 = [10, 50, 20, 30, 40, 50];
const result = array2.find((item) => item > 20);
// console.log(result);

// 3. 1.Find a user by id
const users = [
  { id: 1, name: "Rahim", role: "user", active: true },
  { id: 2, name: "Karim", role: "admin", active: true },
  { id: 3, name: "Salma", role: "user", active: false },
  { id: 4, name: "Ayesha", role: "moderator", active: true },
  { id: 5, name: "Sohel", role: "user", active: true },
  { id: 6, name: "Nusrat", role: "admin", active: false },
  { id: 7, name: "Imran", role: "user", active: true },
  { id: 8, name: "Farhan", role: "user", active: false },
];

const user = users.find((item) => item.id === 5);
// console.log(user);

// 2. Find first inactive user
const inactiveUser = users.find((user) => user.active === false);
// console.log(inactiveUser);

// 3. Find an admin user
const admin = users.find((user) => user.role === "admin");
// console.log(admin);

// 4: When nothing is found
const superAdmin = users.find(
  (superAdmin) => superAdmin.role === "super_admin",
);
if (!superAdmin) {
  console.log("User not found");
}
// console.log(superAdmin);
