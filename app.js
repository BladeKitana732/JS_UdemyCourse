//Object Literal {}
const person = {
    firstName: 'Teresa',
    lastName: 'Smith',
    age: 30,
    email: 'Teresa@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL',
    },
    getBirthYear: function(){
        return 1987;
    }
}

let val;

val = person;

//get specific value 
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;//val = person.address['state'] returns same 
val = person.getBirthYear();


console.log(val);