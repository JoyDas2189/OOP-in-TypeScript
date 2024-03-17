class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `This is ${this.name}, age ${this.age} and my hobbies are ${this.hobbies}.`;
  }
}

class Student extends Persons {
    grade: number;
    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies);
        this.grade = grade;
  }

  introduce1(): string {
      return `${super.introduce()} and I am in ${this.grade} grade.`;
  }
}

const persons1: Persons = new Persons("Joy", 23, ["gaming", "coding"]);
const student1: Student = new Student("Das", 24, ["coding", "travelling"], 12);

console.log(student1.introduce1());
