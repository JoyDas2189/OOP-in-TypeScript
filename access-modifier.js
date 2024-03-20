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
var Player = /** @class */ (function () {
    function Player(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Player.prototype.introduction = function () {
        return "This is ".concat(this.name, ", age ").concat(this.age, " and gender is ").concat(this.gender);
    };
    return Player;
}());
var Crickter = /** @class */ (function (_super) {
    __extends(Crickter, _super);
    function Crickter(name, age, gender, runs) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.runs = runs;
        return _this;
    }
    Crickter.prototype.fullIntroduction = function () {
        return "".concat(_super.prototype.introduction.call(this), " and runs are ").concat(this.runs);
    };
    return Crickter;
}(Player));
var virat = new Crickter("Virat", 34, "Male", 100000);
console.log(virat.fullIntroduction());
