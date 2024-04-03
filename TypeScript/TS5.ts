// //Optional parameters: function

// function greet(name?: string): void{
//     if (name) {
//         console.log(`Hello ${name}`)
//     }
//     else {
//         console.log("Hello, new user");
//     }
// }
// greet();
// greet("Ramesh")


// Default Parameters

// function greet2(name: string='babu'): void {
//     if (name) {
//         console.log(`Hello ${name}`)
//     }
//     else {
//         console.log("Hello, new user");
//     }
// }
// greet2();
// greet2("Ramesh")

//Rest Parameters
// function sum(...numbers: number[]): void{
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     console.log(total);
// }
// sum(1, 2, 3, 4, 5);


//Function Overloading

function reverse(str: string): string;
function reverse(str: number[]): number[];
function reverse(value: string | number[]): string | number[]{
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    }
    else {
        return value.slice().reverse();
    }
}
console.log(reverse("echo"));
console.log(reverse([1,2,3,4,5]));