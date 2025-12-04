const { a } = require("./file2");
const { a: x } = require("./file3");
const { add, sub } = require("./utils");

console.log(a, x);
console.log(add(a, x));
console.log(sub(x, a));
