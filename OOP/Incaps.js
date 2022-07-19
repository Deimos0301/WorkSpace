//Инкапсуляция
// const myButton = {
//     handlers: {
//         click: [
//             fn,
//             () => {
//                 //..
//             }
//         ],
//         mousemove: [
//             fn1,
//             fn2
//         ],
//         mouseenter: []
//     }
// }

const myButton = {
    handlers: {},
    addEventListener(eventName, handler) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
  
        if (!this.handlers[eventName].includes(handler)) {
            this.handlers[eventName].push(handler);
        }
    }
 }
/////////////////////////////////////
//Наследование

const calc = {
    sum(a, b) {
        return a + b;
    },
    diff(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    }
}

const sqrCalc = {
    sum(a, b) {
        return calc.sum(a, b) ** 2; 
    },
    diff(a, b) {
        return calc.diff(a, b) ** 2;
    },
    mul(a, b) {
        return calc.mul(a, b) ** 2;
    },
    div(a, b) {
        return calc.div(a, b) ** 2;
    }
}