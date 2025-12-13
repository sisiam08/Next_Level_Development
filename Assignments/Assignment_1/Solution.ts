// Problem 1
type ValueType = string | number | boolean;
const formatValue = (value: ValueType) => {
  if (typeof value === "string") return value.toUpperCase();
  else if (typeof value === "number") return value * 10;
  else if (typeof value === "boolean") return !value;
};

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(false));

// Problem 2
const getLength = <T>(value: string | Array<T>) => {
  if (typeof value === "string") return value.length;
  else if (Array.isArray(value)) return value.length;
};

// console.log(getLength("typescript is awesome"));
// console.log(getLength([10, "20", 30, "40", 60]));

// Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

// Problem 4
type Product = {
  title: string;
  rating: number;
};

const filterByRating = (value: Product[]) => {
  const filteredProducts = value.filter((product) => product.rating >= 4);

  return filteredProducts;
};

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

// Problem 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: User[]) => {
  const activeUsers = value.filter((value) => value.isActive === true);

  return activeUsers;
};

// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

// console.log(filterActiveUsers(users));

// Problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`
  );
};

// const myBook: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: false,
// };

// printBookDetails(myBook);

// Problem 7

type ArrayType = Array<string | number>;

const uniqueArray: ArrayType = [];
let uLength = 0;

const isInArray = (value: string | number) => {
  for (let i = 0; i < uniqueArray.length; i++) {
    if (uniqueArray[i] === value) return true;
  }

  return false;
};

const getUniqueValues = (arr1: ArrayType, arr2: ArrayType): ArrayType => {
  for (let i = 0; i < arr1.length; i++) {
    if (!isInArray(arr1[i])) {
      uniqueArray[uLength++] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isInArray(arr2[i])) {
      uniqueArray[uLength++] = arr2[i];
    }
  }

  return uniqueArray;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

// Problem 8

type ProductItem = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (product: ProductItem[]) => {
  let totalPrice = product.reduce((total, item) => {
    const { price, quantity } = item;
    const discountedPrice = item.discount ?? 0;
    const itemTotalPrice =
      price * quantity - (price * quantity * discountedPrice) / 100;
    return total + itemTotalPrice;
  }, 0);

  return totalPrice;
};

// const products = [
//   { name: "Pen", price: 10, quantity: 2 },
//   { name: "Notebook", price: 25, quantity: 3, discount: 10 },
//   { name: "Bag", price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));
