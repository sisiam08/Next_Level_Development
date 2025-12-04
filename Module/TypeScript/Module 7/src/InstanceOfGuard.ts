class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleepHours(hour: number) {
    console.log(`${this.name} sleeps ${hour} hours a day.`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  getStudyHours(hour: number) {
    console.log(`${this.name} studies ${hour} hours a day.`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  getTeachingHours(hour: number) {
    console.log(`${this.name} teaches ${hour} hours a day.`);
  }
}

const isStudent = (user: Person) => {
  return user instanceof Student;
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) user.getStudyHours(3);
  else if (isTeacher(user)) user.getTeachingHours(5);
  else user.getSleepHours(8);
};

const student1 = new Student("Siam");
const teacher1 = new Teacher("Osman");
getUserInfo(student1);
getUserInfo(teacher1);
