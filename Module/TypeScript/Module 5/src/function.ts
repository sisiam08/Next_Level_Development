// Normal function
function addNumber(num1: number, num2: number): number {
  return num1 + num2;
}

// Arrow Function
const addNumber2 = (num1: number, num2: number): number => num1 + num2;

console.log(addNumber(2, 4));
console.log(addNumber2(3, 6));

// object => function => method

const poorUser = {
  balance: 5,
  addBalance(value: number) {
    return this.balance + value;
  },
};

console.log(poorUser.addBalance(500));

const arr: number[] = [1, 2, 3, 4, 5];

const sqrArr = arr.map((value: number):number => value * value);


console.log(sqrArr);
