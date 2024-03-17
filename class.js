var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Person;
}());
var person1 = new Person("Joy", 23, ["Gaming", "Coding"]);
var person2 = new Person("Das", 24, ["Coding", "Travelling"]);
console.log(person1.hobbies);
console.log(person2.hobbies);
