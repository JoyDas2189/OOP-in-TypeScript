class Person {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name:string, age:number, hobbies:string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

const person1:Person = new Person("Joy", 23, ["Gaming", "Coding"]);
const person2:Person = new Person("Das", 24, ["Coding", "Travelling"]);

console.log(person1.hobbies);
console.log(person2.hobbies);
