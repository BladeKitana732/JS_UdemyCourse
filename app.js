//Type conversion - taking variable and changing data type; 

let val;

//Number to string 
val = String(555);
val = String(4+4);

//Boolean  to string
 val = String(true);

 //date to string
 val = String(new Date());

 //array to string
 val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');
 
//Boolean to number
val = Number(true);
val = Number(false);
val = Number(null);

//NaN - not a number 
val = Number('hello');
val = Number([1,2,3]);

//parseInt
val = parseInt('100');
val = parseFloat('100.30');//decimals

//Output 
// console.log(val);
// console.log(typeof val);
// //console.log(val.length); //length only works on strings
// console.log(val.toFixed(2));//specify decimals. only works on numbers

//string + num == string/ type coercion 
const val1 = String(5);
const val2 = 6;

const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);


