//If statement and comparison operators
// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

//Equal to == testing VALUE not the type (single = is assigning)
// if(id == 100){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// //not equal to 
// if(id != 101){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// //Equal to value & type ===
// if(id === 100){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// //Not Equal to value & type ===
// if(id !== 100){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

//testing type if undefined 
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

//greater or less 
// if(id <= 200) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

//IF Else

const color = 'yellow';

// if(color ==='red'){
//     console.log('color is red');
// } else if(color === 'blue') {
//     console.log('color if blue')
// } else {
//     console.log('color is not red or blue');
// }

//Logical Operators

const name = 'Steve';
const age = 20;

//AND &&
if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`)
}

//OR ||
if(age < 16 || age > 65){
    console.log(`${name} cannot run in the race`);
} else {
    console.log(`${name} is registered for the race`);
}

//ternary operator 
console.log(id === 100 ? 'correct' : 'incorrect');