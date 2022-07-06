/////////////////////////////////////
// Массивы


var array = ['Евгений', 'Холопов', '24'];

array[2] = '100';
array.push('программист');

console.log(array);
console.log(array[3]);

// Перебор всеъ элементов массива и вывод в консоль 

var array = ['Сергей','Иван','Дмитрий','Олег'];

array.push('Станислав');

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
};

//////////////////////////////////////////////////

// Массив в виде 3-х объектов, их перебор и вывод в консоль только значения переменной 'name'

var array1 = [
    {
        name: 'Евгений',
        lastName: 'Холопов'
    },
    {
        name: 'Михаил',
        lastName: 'Холопов'
    },
    {
        name: 'Екатерина',
        lastName: 'Холопова'
    },
];

for (let i = 0; i < array1.length; i++) {
    const firstName = array1[i].name;
    console.log(firstName);
};

///////////////////////////////////////////////////////////
// Деструктурирующее присванивание массиву

let [name0, lastName0] = ['Евгений', 'Холопов'];
console.log(name0, lastName0);

///

var input = 'Евгений Холопов';
var parts = input.split(' '); // var [name1, lastName1] = input.split(' ');
var [name1, lastName1] = parts;
console.log(name1, lastName1);

///

function hi(userInfo) {
    var [name2, lastName2] = userInfo;
    console.log(`Привет, меня зовут ${name2} ${lastName2}`);
};
var input = 'Евгений Холопов';
hi(input.split(' '));

///

function hello([lastName3, name3, secondName3]) {
    console.log(`Привет, меня зовут ${lastName3} ${name3} ${secondName3}`);
};
var input1 = 'Холопов Евгений Михайлович';
hello(input1.split(' '));