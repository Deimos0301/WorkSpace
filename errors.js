///////////////////////////////////////////
// Обработка ошибок

function div(a, b) {
    if (b != 0) {
        return a / b;
    }
}
var result = div(10, 2);

if (result != undefined) {
    console.log(result)
} else {
    console.log('На ноль делить нельзя!');
};

////////////////////////////////////////////

function div(a, b) {
    if (b < 1) {
        console.log('b должен быть положительным числом!');
    } else if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else if (b == undefined) {
        console.log('b должен быть передан');
    } else if (!isFinite(b)) {
        console.log('b должен быть числом');
    } else {
        return a / b
    }
};
var result = div(10, 2);

if (result != undefined) {
    console.log(result)
};


/////////////////////////////////////////////////
// Try & Catch

try {
    console.log('до');
    throw new Error('Текст ошибки');
    console.log('после');
} catch (e) {
    console.log(e.message);
};

////////////////////////////////////////////////

function div(a, b) {
    try {
        if (b < 1) {
            throw new Error('b должен быть положительным числом!');
        } else if (b == 0) {
            throw new Error('На ноль делить нельзя!');
        } else if (b == undefined) {
            throw new Error('b должен быть передан');
        } else if (!isFinite(b)) {
            throw new Error('b должен быть числом');
        }
        return a / b;

    } catch (e) {
        console.log(e.message);
    }
};

// var result = div(10, -1);

// if (result != undefined) {
//     console.log(result)
// };

try {
   var result = div(10, 2);
   console.log(result);
} catch {
   console.log(e.message);
};

//////////////////////////////////////////////
// Стек вызова


function fn1() {
    console.log('до вызова fn2');
    fn2();
    console.log('после вызова fn2');
};
function fn2() {
    console.log('до вызова fn3');
    fn3();
    console.log('после вызова fn3');
};
function fn3() {
    console.log('внутри fn3');
};

console.log('до вызова fn1');
fn1();
console.log('после вызова fn1');

////////////////////////////////////////////////


function fn1() {
    console.log('до вызова fn2');
    fn2();
    console.log('после вызова fn2');
};
function fn2() {
    console.log('до вызова fn3');
    fn3();
    console.log('после вызова fn3');
};
function fn3() {
    console.log('внутри fn3');
    throw new Error('Ошибка!!!');
};


try {
    console.log('до вызова fn1');
    fn1();
    console.log('после вызова fn1');
} catch (e) {
    console.log(e.message);
}
