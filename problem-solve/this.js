const user = {
  name: "Rahim",
  friends: ["Karim", "Jolil"],

  showFriends: function () {
    // এখানে this মানে Rahim (সঠিক)

    this.friends.forEach((friend) => {
      // এই অ্যারো ফাংশনটি তার 'মা' (showFriends) এর 'this' কে চেনে।
      // তাই সে জানে this.name মানে Rahim
      console.log(this.name + " এর বন্ধু হলো " + friend);
    });
  },
};

// user.showFriends();

const user2 = {
  name: "Rahim",

  // ১. সাধারণ ফাংশন (Regular Function)
  sayHi: function () {
    console.log("Regular:", this.name);
  },

  // ২. অ্যারো ফাংশন (Arrow Function)
  sayBye: () => {
    console.log("Arrow:", this.name);
  },
};

user2.sayHi(); // আউটপুট: "Regular: Rahim"
user2.sayBye(); // আউটপুট: "Arrow: undefined" (বা খালি আসবে)
