//////////////////////////////////////
// Symbol

const mySymbol = Symbol();
const myNewSymbol = Symbol();

const obj = {
    name: 'Евгений',
    lastName: 'Холопов'
};

obj.old = 24;

obj[mySymbol] = 'привет';
obj[myNewSymbol] = 'еще привет';

for (const name in obj) {
    console.log(name);
}

////////////////////////////////////////
// Итератор

var a = [1, 2, 3, 4];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
};

///////////////////////////////////////

function range(from, to) {
    for (var i = from; i <= to; i++) {
        console.log(i);
    }
}
range(3, 15);

///////////////////////////////////////

function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        result += arguments[i];
    }
    return result;
}
sum(1, 2, 3, 4);

/////////////////////////////////////

var iterator = {
    next() {
        return {
            value: '',
            done: ''
        };
    }
};

var numbers = [1, 2, 3, 4];

for(var element of numbers) {
}

next(); // {value: 1; done: false}
next(); // {value: 2; done: false}
next(); // {value: 3; done: false}
next(); // {value: 4; done: false}
next(); // {done: true}


/////////////////////////////////////////

function range(from, to) {
    var objectWithIterator = {};

    objectWithIterator[Symbol.iterator] = function () {
        var i = from;

        return {
            next() {
                // i++
                return {
                    value: i, // i++
                    done: i++ === to + 1
                }
            }
        }
    };
    return objectWithIterator;
}

for (const number of range(1, 10)) {
    console.log(number);
};

// Объект в JavaScript – это набор свойств, к которым можно обращаться по именам.

// Массив – это упорядоченный набор элементов, к которым можно обращаться по числовым индексам.

// Деструктуризация упрощает процесс извлечения значений из объектов и массивов.

// Rest-оператор упрощает извлечение остатка массива, объекта или аргументов функции.

// Spread-оператор упрощает разброс элементов по массиву, объектам или аргументам функции.

// Symbol генерирует уникальное значение.

// Итератор описывает, как нужно перебирать значения.

// Цикл for … in перебирает перечислимые свойства объекта.

// Цикл for … of перебирает всё, у чего есть итератор.
