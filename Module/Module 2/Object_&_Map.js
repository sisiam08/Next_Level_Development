// const obj = {};
// obj[course1] = {courseID: "Level 1"};
// obj[course2] = {courseID: "Level 2"};

// console.log(obj);

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const courses = [
  [course1, "Level 1"],
  [course2, "Level 2"],
];

// console.log(courses);

const map = new Map(courses);

// console.log(map);

map.set(course1, { courseID: "Level 1" });
map.set(course2, { courseID: "Level 2" });

map.forEach((value, key) => {
    key.name = key.name + " - Updated";
});

// for(let key of map.keys())
// {
//     key.name = key.name + " - Updated";
// }

console.log(map);
