// type alias
type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "Osman",
  age: 20,
  role: "admin",
};

console.log(user1);

type IsAdmin = boolean;

const isAdmin: IsAdmin = true;

// Interface  ->  object type : array, object, function

// object
interface IUser {
  name: string;
  age: number;
}

interface IRole {
  role: "admin" | "user";
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user2: IUserWithRole = {
  name: "Osman",
  age: 20,
  role: "admin",
};

console.log(user2);

//  array
type Friends = string[]; //type alias

const friends1: Friends = ["A", "B", "C"];

interface IFriends {
  [index: number]: string;
}

const friends2: IFriends = ["A", "B", "C"];

// function

type Add = (num1: number, num2: number) => number; // type alias

const add1: Add = (num1, num2) => num1 + num2;

interface IAdd {
  (num1: number, num2: number): number;
}

const add2: IAdd = (num1, num2) => num1 + num2;
