//  class Calculator {
//     addition(a:number, b:number):number;
//     addition(a:string, b:string):string;
//     addition(a:any, b:any):any {
//         if(typeof a === 'number' && typeof b === 'number') {
//             return a + b;
//         }else if (typeof a === 'string' && typeof b === 'string') {
//             return a +" " + b;
//         }else {
//             throw new Error("unsuppoted parameter.");
//         }
//     }
//  }
//  const calculator:Calculator = new Calculator();
//  console.log(calculator.addition(10,20));
//  console.log(calculator.addition("Joy", "Das"));
var Counter = /** @class */ (function () {
    function Counter() {
    }
    // a:number;
    // b:number;
    // constructor(a:number, b:number) {
    //     this.a = a;
    //     this.b = b;
    // }
    Counter.prototype.getResult = function (a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        else {
            return a + " " + b;
        }
    };
    return Counter;
}());
var number = new Counter();
console.log(number.getResult(10, 20));
console.log(number.getResult("Joy", "Das"));
