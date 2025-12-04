const number = [10, 20, 100, 50];

const arr = Array.from(number, (value) => value * 3);

// console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(0, 10, 2));
