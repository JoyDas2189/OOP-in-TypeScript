abstract class Shape {
    height:number;
    constructor(height:number) {
        this.height = height
    }
    abstract calculateArea():string;
}

class Rectangle extends Shape {
    width:number;
    constructor(height:number, width:number) {
        super(height);
        this.width = width;
    }
    calculateArea(): string {
        return `Area of triangle is ${this.height * this.width}.`;
    }
}

class Triangle extends Shape {
    base:number;
    constructor(height:number, base:number) {
        super(height);
        this.base = base;
    }

    calculateArea(): string {
        return `Area of triangle is ${0.5 * this.height * this.base}.`;
    }
}
const rectangle:Rectangle = new Rectangle(4, 6);
const triangle:Triangle = new Triangle(4, 6);
console.log(rectangle.calculateArea());
console.log(triangle.calculateArea());


