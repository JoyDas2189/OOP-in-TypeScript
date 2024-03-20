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
var Shape = /** @class */ (function () {
    function Shape(height) {
        this.height = height;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(height, width) {
        var _this = _super.call(this, height) || this;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return "Area of triangle is ".concat(this.height * this.width, ".");
    };
    return Rectangle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(height, base) {
        var _this = _super.call(this, height) || this;
        _this.base = base;
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        return "Area of triangle is ".concat(0.5 * this.height * this.base, ".");
    };
    return Triangle;
}(Shape));
var rectangle = new Rectangle(4, 6);
var triangle = new Triangle(4, 6);
console.log(rectangle.calculateArea());
console.log(triangle.calculateArea());
