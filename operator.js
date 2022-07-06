////////////////////////////////////
// spread-operator

var numbers = [1, 2, 3, 4];

function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};

var result = sum(...numbers); //var result = sum(1, 2, 3, 4)
console.log(result);


//////////////////////////////////////
// rest-operator

var a = [1, 2, 3, 4];
var [first, second, ...rest] = a;

console.log(first, second, rest);

//////////////////////

var num = [1, 2, 3, 4];

function sum(first, second, ...rest) {
    console.log(first, second, rest);
}
sum(...num);

///////////////////////

var numbers = [1, 2, 3 ,4];
var numbers2 = [5, 6, 7 ,8];

var result = numbers.concat(numbers2); //var result = [...numbers; ...numbers2];
console.log(result);