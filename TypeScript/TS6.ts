// // //OOP Class

// // class Person{
// //     name: string;
// //     age: number;

// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }

// //     greet() {
// //         console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
// //     }
// // }

// // let person1 = new Person('Chan', 22);
// // person1.greet();

// class employee{
//     private salary: number;
//     readonly hikeper: number = 0.15;

//     constructor() {
//         this.salary = 20000;
//     }

//     hike():number {
//         this.salary += this.salary * this.hikeper;
//         return this.salary
//     }

//     getSalary(): number{
//         return this.salary;
//     }

//     setSalary(amount:number): void{
//         this.salary = amount;
//     }
// }

// class Bi extends employee{
//     bonus() {
//         console.log("I got yearly bonus");
//     }
// }

// let harsh = new Bi();
// harsh.setSalary(50000);
// console.log(harsh.getSalary())
// console.log(harsh.hike());
// harsh.bonus()


//Abstract Classes
abstract class CompamyLaws{
    abstract salaryDate(): void;
}
class company extends CompamyLaws{
    salaryDate() {
        console.log(`Salary Date is 5th of every month`);
    }
}

let iSOC = new company();
iSOC.salaryDate();