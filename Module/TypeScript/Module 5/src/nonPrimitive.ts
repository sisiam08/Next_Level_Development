// Array

let bazarList: string[] = ["Rice", "Potato", "Milk", "Eggs"];

// bazarList.push(12); //can not push any other type value without string

let mixedArry: (string | number)[] = [
  "Rice",
  1,
  "Potato",
  3,
  "Milk",
  1,
  "Eggs",
  12,
];

// mixedArry.push(true); // can not push any other type value without string and number

// tuple
let couple: [string, string] = ["Husband", "Wife"];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 4];

// Reference type : Object

const user: {
  organization: "Kamla"; // value acts as a type -> 1st way
//   readonly organization : string; // access modiefier  -> 2nd way
  firstName: string;
  middleName?: string; //Optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Kamla",
  firstName: "Shahariar",
  middleName: "Islam",
  lastName: "Siam",
  isMarried: true,
};

// user.organization = "Sharaih Homes";

console.log(user);
