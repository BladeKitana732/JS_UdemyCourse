// var, let(adv with block level scoping), const; can reassign value w/ var or let

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init var
// var greeting;
// console.log(greeting); //returns undefined
// greeting = 'Hello';
// console.log(greeting);

// //letter, numbers, _(used for private variables in JS patterns), $(used w. jquery selecting things from the DOM)
// //Cannot start w. a number

// //multi word vars 
// var firstName = 'John'; //Camel case
// var first_name = 'Sara'; //snake/underscore method
// var FirstName = 'Tom'; //Pascal case
// var firstname; 

//LET

// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//CONST cannot be reassigned 
// have to assign a value; cannot be undefined 

const person = {
    name: 'John',
    age: 30
}

//mutate; change object data 
person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
//mutation 
numbers.push(6);

console.log(numbers);

//array or objects are mutable