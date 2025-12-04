class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("undefined");
    }

    this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this, this.items.length === 0;
  }

  print() {
    if (this.isEmpty()) console.log("Empty Stack");
    else console.log(this.items.join(" -> "));
  }
}

const stack = new Stack();

const x = stack.peek();
console.log(x);

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

const y = stack.peek();
console.log(y);

stack.pop();
stack.print();
stack.pop();
stack.pop();
stack.print();
stack.pop();
