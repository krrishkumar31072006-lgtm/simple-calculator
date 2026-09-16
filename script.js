let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendValue(value) {

    if (value == "+" || value == "-" || value == "*" || value == "/") {

        firstNumber = display.value;
        operator = value;
        display.value = "";

    } else {

        display.value += value;

    }
}

function calculate() {

    secondNumber = display.value;

    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result;

    if (operator == "+") {
        result = a + b;
    }
    else if (operator == "-") {
        result = a - b;
    }
    else if (operator == "*") {
        result = a * b;
    }
    else if (operator == "/") {
        result = a / b;
    }

    display.value = result;
}

function clearDisplay() {

    display.value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
}

function deleteLast() {

    display.value = display.value.slice(0, -1);
}