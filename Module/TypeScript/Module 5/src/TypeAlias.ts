// Type Alias for object

type UserType = {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: "Male" | "Female";
  phone: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: UserType = {
  id: 123,
  name: {
    firstName: "Shahariar",
    middleName: "Islam",
    lastName: "Siam",
  },
  gender: "Male",
  phone: "09123333333",
  address: {
    division: "Dhaka",
    city: "Gazipur",
  },
};

const user2: UserType = {
  id: 124,
  name: {
    firstName: "Abu",
    lastName: "Bakkar",
  },
  gender: "Male",
  phone: "01344444444",
  address: {
    division: "Dhaka",
    city: "Gazipur",
  },
};

console.log(user1, user2);

// Type Alias for function

type AddFuncType = (num1: number, num2: number) => number;

const add: AddFuncType = (num1, num2) => num1 + num2;

console.log(add(3, 6));
