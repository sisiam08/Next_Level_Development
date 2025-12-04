// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// // const createArrayWitUserObject = (value: object) => [value];
// const createArrayWitUserObject = (value: { id: number; name: string }) => [
//   value,
// ];

// const obj = createArrayWitUserObject({ id: 222, name: "Osman" });

// console.log(obj);

// Generic Function
const createArrayFunctionWithGeneric = <T>(value: T) => [value];

const arrString = createArrayFunctionWithGeneric("Apple");
const arrNUmber = createArrayFunctionWithGeneric(234);
const arrObject = createArrayFunctionWithGeneric({
  id: 2455,
  name: "Osman",
  age: 45,
});

console.log(arrString);
console.log(arrNUmber);
console.log(arrObject);

// tuple
const createArrayTupleFunctionWithGeneric = <X, Y>(value1: X, value2: Y) => [
  value1,
  value2,
];

const container = createArrayTupleFunctionWithGeneric(
  { id: 2334, name: "osmam", age: 17 },
  234
);

console.log(container);

//
// const addStudentToCourseWithGeneric = <T>(studentInfo: T) => studentInfo;  //direct return
const addStudentToCourseWithGeneric = <T>(studentInfo: T) => {
  return {
    registration: "Complete",
    ...studentInfo,
  };
}; //add more information and then return

const student1 = {
  id: 123,
  name: "Osman",
  course: "IP",
  isEligible: true,
};

const student2 = {
  id: 234,
  name: "Ali",
  course: "Web Development",
  isEligible: true,
  isPrerequisiteComplete: false,
  isProbation: false,
};

const result1 = addStudentToCourseWithGeneric(student1);
const result2 = addStudentToCourseWithGeneric(student2);

console.log(result1);
console.log(result2);
