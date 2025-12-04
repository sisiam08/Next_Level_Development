class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("undefined");
    }

    this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    if (this.isEmpty()) console.log("Empty Queue");
    else console.log(this.items.join(" -> "));
  }
}

const queue = new Queue();

const a = queue.peek();
console.log(a);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

console.log(queue.peek());

queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
