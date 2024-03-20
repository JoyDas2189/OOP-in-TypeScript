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
var Addition = /** @class */ (function () {
    function Addition(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Addition.prototype.calculation = function () {
        return "Addition of ".concat(this.num1, " and ").concat(this.num2, " is ").concat(this.num1 + this.num2, ".");
    };
    return Addition;
}());
var Multplication = /** @class */ (function (_super) {
    __extends(Multplication, _super);
    function Multplication(num1, num2) {
        return _super.call(this, num1, num2) || this;
    }
    Multplication.prototype.calculation = function () {
        return "Multiplication of ".concat(this.num1, " and ").concat(this.num2, " is ").concat(this.num1 * this.num2, ".");
    };
    return Multplication;
}(Addition));
var add = new Addition(10, 20);
var mul = new Multplication(10, 20);
console.log(add.calculation());
console.log(mul.calculation());
