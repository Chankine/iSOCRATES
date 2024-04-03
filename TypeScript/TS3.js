var counter = 5;
var isActive = true;
//Array
var ArrayName = ['Chandana', 'M K'];
//Object
var person;
person = {
    name: 'ABC',
    age: 10
};
var greeting;
greeting = function (names) {
    console.log('Hi ' + names);
    return "Hi ".concat(names);
};
console.log(greeting("Ramesh"));
