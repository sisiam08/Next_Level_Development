// keyof : type operator

type RichPeoplesVehicle = {
  car: string; //key : value
  bike: string;
  cng: string;
};

type MyVehicle1 = "car" | "bike" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle1: MyVehicle1 = "bike";
const myVehicle2: MyVehicle2 = "car";

//
type User = {
  id: number;
  name: string;
  age: number;
};

const user: User = {
  id: 123,
  name: "Shahariar",
  age: 23,
};

// const myName  = user.name;
// const myName = user["name"];
// const myId = user["id"];
// const myAge = user["age"];

// console.log({ myName, myId, myAge });

const getPropertyFromObject = <X> (obj: X, key: keyof X) => {
  return obj[key];
};

const userName = getPropertyFromObject(user, "name");
const userID = getPropertyFromObject(user, "id");

console.log(userName);
console.log(userID);

type Product = {
  id: string;
  productName: string;
  price: number;
};

const product: Product = {
  id: "p234",
  productName: "Laptop",
  price: 45000,
};


const productName = getPropertyFromObject(product, "productName");

console.log(productName);   