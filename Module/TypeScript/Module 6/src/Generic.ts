type GenericArray<T> = Array<T>;

// const nameList: string[] = ["X", "Y", "Z"];
// const nameList: Array<string> = ["X", "Y", "Z"];
const nameList: GenericArray<string> = ["X", "Y", "Z"];

// const ageList: number[] = [20, 13, 24];
// const ageList: Array<number> = [20, 13, 24];
const ageList: GenericArray<number> = [20, 13, 24];

// const isEligibleList: boolean[] = [true, false, true];
// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

// Array of Object

type UsersInfo = {
  name: string;
  age: number;
};
const usersInfo: GenericArray<UsersInfo> = [
  {
    name: "Osman",
    age: 23,
  },
  {
    name: "Ali",
    age: 30,
  },
];

// tupple
type Coordinates<x, y> = [x, y];

const coordinates1: Coordinates<number, number> = [2, 4];
const coordinates2: Coordinates<string, string> = ["x", "y"];
