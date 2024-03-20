class Addition {
    num1:number;
    num2:number;

    constructor (num1:number, num2:number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calculation():string {
        return `Addition of ${this.num1} and ${this.num2} is ${this.num1 + this.num2}.`;
    }
}

class Multplication extends Addition {
    constructor(num1:number, num2:number) {
        super(num1, num2);
    }
    override calculation(): string {
        return `Multiplication of ${this.num1} and ${this.num2} is ${this.num1 * this.num2}.`
    }
}

const add:Addition = new Addition (10, 20);
const mul:Multplication = new Multplication(10, 20);

console.log(add.calculation());
console.log(mul.calculation());

