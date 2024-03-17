var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduce = function () {
        return "This is ".concat(this.name, ", age ").concat(this.age, " and my hobbies are ").concat(this.hobbies, ".");
    };
    return Persons;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.introduce1 = function () {
        return "".concat(_super.prototype.introduce.call(this), " and I am in ").concat(this.grade, " grade.");
    };
    return Student;
}(Persons));
var persons1 = new Persons("Joy", 23, ["gaming", "coding"]);
var student1 = new Student("Das", 24, ["coding", "travelling"], 12);
console.log(student1.introduce1());
