class Counter {
  static count: number = 0;

  increment() {
    return ++Counter.count;
  }
  decrement() {
    return --Counter.count;
  }
}

const counter1 = new Counter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());

const counter2 = new Counter();
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());

const counter3 = new Counter();
console.log(counter3.decrement());
console.log(counter3.decrement());
console.log(counter3.decrement());
