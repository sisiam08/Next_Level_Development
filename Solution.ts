
type ValueType = string | number | boolean;
const formatValue = (value: ValueType) => {
  if (typeof value === "string") return value.toUpperCase();
  else if (typeof value === "number") return value * 10;
  else if (typeof value === "boolean") return !value;
};


const getLength = <T>(value: string | Array<T>) => {
  if (typeof value === "string") return value.length;
  else if (Array.isArray(value)) return value.length;
};


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


type Product = {
  title: string;
  rating: number;
};

const filterByRating = (value: Product[]) => {
  const filteredProducts = value.filter((product) => product.rating >= 4);

  return filteredProducts;
};



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
