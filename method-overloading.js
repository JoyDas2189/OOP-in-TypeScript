var Shepe = /** @class */ (function () {
    function Shepe(length, base) {
        this.length = length;
        this.base = base;
    }
    Shepe.prototype.getArea = function () {
        return "Area of the triangle is ".concat(this.length * this.base, ".");
    };
    return Shepe;
}());
var area = new Shepe(12, 45);
console.log(area.getArea());
