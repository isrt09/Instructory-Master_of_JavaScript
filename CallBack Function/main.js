
// Example : 01
setTimeout(function(){
    console.log('Welcome to JS Bangladesh');
},3000);

// Example : 02
let persons = [
    {name :'John Smith', age : 35, district : 'USA'},
    {name :'John Maria', age : 36, district : 'UK'},
    {name :'John Olive', age : 37, district : 'UAE'},
    {name :'John Steve', age : 38, district : 'RUS'}
];

function createPerson(person,callback){
    setTimeout(function(){
        persons.push(person);   
        callback();
    },4000);
}

function getPerson(){
    setTimeout(function(){
        let result = '';
        persons.forEach(function(item){
            result += `<li>${item.name}, ${item.age} and ${item.district}</li>`;
        });
        document.getElementById('output').innerHTML= result;
    }, 2000);
}
createPerson( {name :'Mazedur Rahman', age : 60, district : 'BAN'}, getPerson);
