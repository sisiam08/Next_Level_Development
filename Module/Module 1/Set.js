// const set = new Set(["apple", "banana", "mango", "orange"]);

// set.add("apple");
// set.add("banana");
// set.add("mango");
// set.add("orange");
// set.add("apple");

// console.log(set.delete("banana"));
// console.log(set.delete("grape"));

// console.log(set.has("guava"));
// console.log(set.has("apple"));

// set.forEach((value) => {
//   console.log(value);
// });

// console.log(set);

const arry = ["apple", "banana", "mango", "orange", "apple", "banana"];

// Brute force approach to remove duplicates from array
const removeDuplicates = (arry) => {
  const uniqueArry = [];

  arry.forEach((value) => {
    if (!uniqueArry.includes(value)) {
      uniqueArry.push(value);
    }
  });
  return uniqueArry;
};

// Remove duplicates from array using Set implementation
const removeDuplicatesUsingSet = (arry) => {
  // convert array to set
  const set = new Set(arry);

  // convert set to array
  const uniqueArry = Array.from(set);

  return uniqueArry;
};

console.time("Brute Force");
console.log(removeDuplicates(arry));
console.timeEnd("Brute Force");

console.time("Set Implementation");
console.log(removeDuplicatesUsingSet(arry));
console.timeEnd("Set Implementation");
