let counter: number = 5;

let isActive: boolean = true;

//Array
let ArrayName:string[] = ['Chandana', 'M K'];

//Object
let person: {
    name: string;
    age: number;
};
person = {
    name: 'ABC',
    age: 10
};

let greeting: (names: string) => string;
greeting = function (names: string) {
    console.log('Hi ' + names);
    return `Hi ${ names }`;
};

console.log(greeting("Ramesh"));