// Object destructuring

const user = {
  id: 123,
  name: {
    firstName: "Shahariar",
    middleName: "Islam",
    lastName: "Siam",
  },
  gender: "Male",
  favouriteColor: "Black",
};

const {
  name: { firstName, middleName: myMidName, lastName },
  gender,
  favouriteColor: myFavouriteColor,
} = user;

console.log(firstName);
console.log(myMidName);
console.log(myFavouriteColor);

// Array Destructuring

const friends = ["Osman", "Ali", "Omar"];

// const [bestFriend] = friends; //1st element of array
// const [, bestFriend] = friends; //2nd element of array
const [, , bestFriend] = friends; //3rd element of array
// const [, bestFriend, anotherFrnd] = friends; //2nd and 3rd element of array
// const [bestFriend, , anotherFrnd] = friends; //1st and 3rd element of array

console.log(bestFriend);
