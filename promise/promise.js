// ожидание (pending)
// выполнено успешно (fulfilled)
// выполнено неудачно (rejected)

const tmp = {
    state: ['pending', 'fulfield', 'rejected'],
    resolveQueue: [
       () => console.log(1)
    ],
    rejectQueue: [
        () => console.log(2)
    ],
};

/////////////////////////////////////
// Examples

console.log('до promise');
const promise = new Promise((resolve, reject) => {
    console.log('внутри promise');
});
console.log('после promise');

///////////////////////////////////////

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('resolved');
        }, ms);
    });
};

const promise1 = delay(2000);

promise1.then(() => console.log(1));
promise1.then(() => console.log(2));
promise1.then(() => console.log(3));

const tmp1 = {
    state: ['pending'],
    resolveQueue: [
        () => console.log(1)
    ]
};