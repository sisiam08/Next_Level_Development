
// nested arrats to flat array

const arr = [1, 2, [3, 4], 5, [6, 7, 8], 9];

const flatArray = arr.flat();

// console.log(flatArray);

const arr2 = [1, 2, [3, 4], 5, [6, [7, 8, [9]]]];

const flatArray2 = arr2.flat(Infinity);

// console.log(flatArray2);



const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];


const flatTags = [...new Set(tagsFromPosts.flat())];

console.log(flatTags);