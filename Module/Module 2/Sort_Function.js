
const number = [10, 20, 100, 50, 90, 60, 30];

// Sorting in Ascending order
const sortedNumberASC = number.sort((a, b)=> a-b);

console.log("Sorted Number ASC: ", sortedNumberASC);

// Sorting in Descending order
const sortedNumberDSC = number.sort((a, b)=>b-a);

console.log("Sorted Number DSC: ", sortedNumberDSC);

// Sorting String Array by first character
const stringArray = ["Banana", "Apple", "Mango", "Orange", "Pineapple"];

const sortedString1 = stringArray.sort((a, b) => a.localeCompare(b));
const sortedString2 = stringArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

console.log("Sorted String Array (Locale Compare): ", sortedString1);
console.log("Sorted String Array (Char Code): ", sortedString2);


