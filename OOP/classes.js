class Calc  {
    sum(a, b) {
        return a + b;
    }

    diff(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    div(a, b) {
        return a / b;
    }
}

const calc = new Calc();
console.log(calc.mul(10, 5));

/////////////////////////////////////

class SqrCalc {
    sum(a, b) {
        return (a + b) ** 2;
    }

    diff(a, b) {
        return (a - b) ** 2;
    }

    mul(a, b) {
        return (a * b) ** 2;
    }

    div(a, b) {
        return (a / b) ** 2;
    }
}

const sqrCalc = new SqrCalc();
console.log(sqrCalc.mul(2, 2))
