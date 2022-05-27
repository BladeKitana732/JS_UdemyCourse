//Array & methods 
const numbers = [43, 56, 33, 23, 44 ,36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mix = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val; 

val = numbers.length;//get array length
val = Array.isArray(numbers);//check if array
val = numbers[3];//get single value; 0 based

//insert into array 
numbers[2] = 100;

//find idex of value
val = numbers.indexOf(36);

//Mutating 
// numbers.push(250);//add to the end
// numbers.unshift(120);//add to front
// numbers.pop();//take off from end
// numbers.shift();//take off from front
// numbers.splice(1,3)//splice values (where we start, where we end)
// numbers.reverse();//reverse

//concatenate
val = numbers.concat(numbers2);
//sort
val = fruit.sort();//alphabetical order
// val = numbers.sort();//sorts by first number; fix by using "compare function"
// val = numbers.sort(function(x,y){
//     return x - y
// })

// //reverse sort 
// val = numbers.sort(function(x,y){
//     return y - x
// });

//Find 
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);