//Template literals 
//inserting HTML through Javascript 

const name = 'John';
const age = 31;
const job = 'Web Dev';
const city = 'Miami';
let html;

//w/o template strings (ES5)
html = '<ul><li>Name: '+ name + '</li><li>Age:' + age + '</li><li>Job:' + job + '</li><li>City:' + city + '</li></ul>';

html = '<ul>' + 
       '</li><li>Name: ' + name + '</li>' +
       '</li><li>Age: ' + age + '</li>' +
       '</li><li>Job: ' + job + '</li>'+
       '</li><li>City: ' + city + '</li>' +
       '</ul>';

//with template strings
function hello() {
    return 'hello';
}


html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li> 

    </ul>
`;

document.body.innerHTML = html;
