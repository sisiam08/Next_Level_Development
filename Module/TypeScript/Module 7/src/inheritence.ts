// Parent Class
class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleepHours(hour: number) {
    console.log(`${this.name} sleeps ${hour} hours a day.`);
  }
}

// Child Class
class Student extends Person {
  class: number;

  constructor(name: string, cls: number, age: number, address: string) {
    super(name, age, address);
    this.class = cls;
  }

  getStudyHours(hour: number) {
    console.log(`${this.name} studies ${hour} hours a day.`);
  }
}

// Child Class
class Teacher extends Person {
  subject: string;

  constructor(name: string, subject: string, age: number, address: string) {
    super(name, age, address);
    this.subject = subject;
  }

  getTeachingHours(hour: number) {
    console.log(`${this.name} teaches ${hour} hours a day.`);
  }
}

const student1 = new Student("Siam", 12, 23, "Gazipur");
student1.getSleepHours(8);
student1.getStudyHours(5);

const teacher1 = new Teacher("Osman", "Math", 30, "Dhaka");
teacher1.getSleepHours(6);
teacher1.getTeachingHours(7);
