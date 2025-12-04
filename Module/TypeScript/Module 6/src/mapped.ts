// map
// const arrayOfNum: number[] = [1, 2, 3, 4, 5];
// const arrayOfString: string[] = ["1", "2", "3", "4", "5"];

// const ArrayOfNumToString: string[] = arrayOfNum.map((num) => num.toString());

// console.log(ArrayOfNumToString);

// mapped type

type AreaOfNumber = {
  height: number;
  width: number;
};

// type AreaOfString = {
//     height: string;
//     width: string;
// }

// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };

// type AreaOfString = {
//   [key in keyof AreaOfNumber]: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 100,
  width: "200",
};
