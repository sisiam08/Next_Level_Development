// const { a } = require("./file2");
// const { a: x } = require("./file3");
// const { add, sub } = require("./utils/index.mjs");

import { a } from "./file2.mjs";
import { a as x } from "./file3.mjs";
import { add, sub } from "./utils/index.mjs";

console.log(a, x);
console.log(add(a, x));
console.log(sub(x, a));
