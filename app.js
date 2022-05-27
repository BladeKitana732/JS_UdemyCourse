//Numbers & math object

const num1 = 100;
const num2 = 50;
let val;

//simple math
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //remainder

// Math object 
val = Math.PI;
val = Math.E;
val = Math.round(2.8);//rounds to 3; 
val = Math.ceil(2.4);//round up even if below .5
val = Math.floor(2.8);//round down 
val = Math.sqrt(64);
val = Math.abs(-3);//gives absolute number
val = Math.pow(8, 2);//power of a number
val = Math.min(2, 33, 45, -5);//returns min
val = Math.max(2, 33, 45, -5);
val = Math.random();//decimal

val = Math.floor(Math.random() * 20);//random whole number 

console.log(val);

