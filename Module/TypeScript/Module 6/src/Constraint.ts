// constaint: strict rules deya

const addStudentToCourseWithGeneric = <T extends { id: number; name: string }>(
  studentInfo: T
) => {
  return {
    registration: "Complete",
    ...studentInfo,
  };
};

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

const student3 = {
  //   id: 456,
  //   name: "Omar",
  hasScholership: true,
}; //without id and name this object can not use in generic function because id and name  constraint

const result1 = addStudentToCourseWithGeneric(student1);
const result2 = addStudentToCourseWithGeneric(student2);
// const result3 = addStudentToCourseWithGeneric(student3);

console.log(result1);
console.log(result2);
// console.log(result3);
