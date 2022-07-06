/////////////////////////////////////
//Объекты 
var obj = {
    name: 'Евгений',
    lastName: 'Холопов', 
    old: '24', 
    profession: 'программист'
};
console.log(obj);

console.log(obj.old);

obj.profession = 'Дэлбич';

console.log(obj.profession);

////////////////////////////////////////

var user = {
    lastName: 'Холопов',
    name: 'Евгений',
    secondName: 'Михайлович'
};

var name = user.name;
var lastName = user.lastName;

var {name , lastName} = user;

console.log(`Привет, меня зовут ${name} ${lastName}`);


