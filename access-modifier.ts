class Player {
    name: string;
    age: number;
    gender:string;

    constructor (name:string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduction() : string {
        return `This is ${this.name}, age ${this.age} and gender is ${this.gender}`;
    }
}

class Crickter extends Player{
    runs:number;
    constructor (name:string, age:number, gender:string, runs:number) {
        super(name, age, gender);
        this.runs = runs;
    }

    fullIntroduction():string {
        return `${super.introduction()} and runs are ${this.runs}`;
    }
}

const Rohit:Player = new Player("Rohit", 39, "Male");
const virat:Crickter = new Crickter ("Virat", 34, "Male", 100000);

console.log(virat.fullIntroduction());