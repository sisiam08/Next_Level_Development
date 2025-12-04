class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;

    return this;
  }

  //   private method (defined by underscore "_")
  _traverseAllList(index) {
    let count = 0;
    let currentNode = this.head;
    while (count != index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      console.error("Index out of the boundary!");
      return undefined;
    }

    if (index == 0) {
      return this.prepend(value);
    }

    if (index == this.size) {
      return this.append(value);
    }

    const leadNode = this._traverseAllList(index - 1);

    const newNode = new Node(value);

    newNode.next = leadNode.next;
    leadNode.next = newNode;

    this.size++;
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      console.error("Index out of the boundary!");
      return undefined;
    }

    if (index == 0) {
      this.head = this.head.next;
      if (this.size == 1) this.tail = null;

      this.size--;

    //   return this.head.value;
    } else {
      const leadNode = this._traverseAllList(index - 1);

      leadNode.next = leadNode.next.next;

      if (leadNode.next == null) this.tail = leadNode;

      this.size--;
    }
  }

  print() {
    const arr = [];

    let currentNode = this.head;

    while (currentNode != null) {
      arr.push(currentNode.value);

      currentNode = currentNode.next;
    }

    if(this.size!=0) console.log(arr.join(" -> "), "-> null");
    else console.log("Empty LinkedList!");
  }
}

const linkdList = new LinkedList();

// linkdList.append(10);
// linkdList.append(20);
// linkdList.append(30);

linkdList.append(10).append(20).append(40);

linkdList.insertAt(2, 30);

linkdList.print();

linkdList.remove(3);
linkdList.remove(1);
linkdList.remove(1);

linkdList.print();

linkdList.remove(0);

linkdList.print();
