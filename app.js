//Function (blocks of code that can be used) declarations & expressions

function greet(firstName = 'John', lastName = 'Doe') { //can set default w/in parameter ES6
    // if(typeof firstName === 'undefined'){firstName = 'John'}//default for ES5
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}//default for ES5
    //console.log('hello');
    return 'hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

//Expressions 

const square = function(x = 3) { //treating 3 as the default 
    return x * x;
};

// console.log(square());

//IIFEs - function declared and ran at the same time 
// (function(){
//     console.log('IIFE ran...');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Brad');

//Property Methods

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete todo')
}

todo.add();
todo.edit(22);
todo.delete();