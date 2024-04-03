// // //OOP Class
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
var CompamyLaws = /** @class */ (function () {
    function CompamyLaws() {
    }
    return CompamyLaws;
}());
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    company.prototype.salaryDate = function () {
        console.log("Salary Date is 5th of every month");
    };
    return company;
}(CompamyLaws));
var iSOC = new company();
iSOC.salaryDate();
