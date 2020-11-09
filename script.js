let firstValue = '';
let secondValue = '';
let operatorValue = '';

function digit(n) {
    console.log(`Works! ${n}`);

    if (operatorValue) {
        secondValue += n;
        write(secondValue);
    } else {
        firstValue += n;
        write(firstValue);
    }
}

function write(n) {
    document.querySelector('#display').value = n;
}

function operand(operator) {
    console.log(`operand ${operator}`)
    write(operator);
    operatorValue = operator;
}

function getResult() {
    let result = 0;
    switch (operatorValue) {
        case "+":
            result = +firstValue + +secondValue;
        break;
        case "-":
            result = +firstValue - +secondValue;
        break;
        case "*":
            result = +firstValue * +secondValue;
        break;
        case "/":
            result = +firstValue / +secondValue;
        break;
        default:write(result);
    }
    write(result);
    setInitialValue(result);
}

function setInitialValue(firstValueDefault = '') {
    firstValue = firstValueDefault;
    secondValue = '';
    operatorValue = '';
}
