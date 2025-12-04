class Person {
  getSleep() {
    console.log(`Person sleeps 8 hours a day.`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`Student studies 7 hours a day.`);
  }
}

class NexLevelDeveloper extends Person {
  getSleep() {
    console.log(`Teacher teaches 6 hours a day.`);
  }
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NexLevelDeveloper();

// person1.getSleep();
// person2.getSleep();
// person3.getSleep();

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  length: number;
  width: number;

  constructor(length: number, width: number) {
    super();
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

const getAreas = (shape: Shape) => {
  return shape.getArea();
};

const shape1 = new Shape();
const shape2 = new Circle(5);
const shape3 = new Rectangle(5, 4);

console.log(getAreas(shape1));
console.log(getAreas(shape2));
console.log(getAreas(shape3));
