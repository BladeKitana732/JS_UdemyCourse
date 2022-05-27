//String Methods and concatenation 

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design, html, javascript, react';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Appending - add on
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping 
val = 'That\'s awesome, I can\'t wait';

//Methods
val = firstName.length; //property not a method so () is not needed
val = firstName.concat(' ', lastName);
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
val = firstName.charAt('2');
val = firstName.charAt(firstName.length -1); //last character formula 
val = firstName.substring(0, 4);//returns Will
val = firstName.slice(0,4);//mostly used to pull things out of arrays; similar to substring
val = firstName.slice(-3);
val = str.split(' ');//array by space between 
val = tags.split(',');//array of each tag 
val = str.replace('Brad', 'Jack');//replaces 
val = str.includes('Hello');

//can treat strings like read only arrays 
// val = firstName[0];





console.log(val);