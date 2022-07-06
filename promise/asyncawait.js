function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
// delay(1000)
// .then(() => delay(1000));
// .then(() => delay(1000));
// .then(() => delay(1000));


async function fn() {
    console.log('до')
    await delay(1000);
    console.log('1');
    await delay(1000);
    console.log('2');
    await delay(1000);
    console.log('3');
    await delay(1000);
    console.log('после');
}
console.log('До fn');
fn();
console.log('После fn');

