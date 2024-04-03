//Type Inference --> gives the datatype automatically no need to specify the data type of a variable

// function add(a, b) {
//     return a + b;
// }

// console.log(add(20, 30));

// const num = [10, 20, 30];

// // const len = num.length;
// // console.log(len);

// // for (let i = 0; i < num.length; i++) {
// //     num[i] *= 3;
// // }

// // console.log(num);

// num.forEach(num1 => console.log(num1 * 3));


// function up(a) {
//     return a.toUpperCase();
// }
// console.log(up('hii'));

function stringUppercase(str: string): void{
    console.log(str.toUpperCase())
}
stringUppercase('Hi ii')