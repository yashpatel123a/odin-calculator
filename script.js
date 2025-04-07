console.log(
    "hello world"
);

function add(a, b) {
    console.log("+");

    return a + b;
}
function subtract(a, b) {
    console.log("-");

    return a - b;
}
function multiply(a, b) {

    console.log("*");

    return a * b;
}
function divide(a, b) {

    console.log("/");

    return a / b;
}

let num1="", num2="", operator="";

function operate(a, b, operator) {
    m = Number(a);
    n = Number(b);
    console.log(m);
    console.log(n);
    switch(operator){
        case '+':
            return add(m, n);
        case '-':
            return subtract(m, n);
        case '*':
            return multiply(m, n);
        case '/':
            return divide(m, n);
    }
    return NaN;
}
let isNum1=true, isNum2=false, isOperator = false;
const display = document.querySelector(".display");
const operandList = document.querySelectorAll(".operand");
operandList.forEach((operand) => {
    operand.addEventListener('click', () => {
        if(isNum1)
        {
            num1 += operand.textContent;
            display.textContent += operand.textContent;
        }
        if(isNum2)
        {
            num2 += operand.textContent;
            display.textContent += operand.textContent;
        }
    })

});

const equal = document.querySelector(".operate");
equal.addEventListener('click', () => {
    if(isNum1 === false && isNum2 === true && isOperator === true)
    {
        let ans = operate(num1, num2, operator);
        num1 = ans;
        num2 = '';
        operator = '';
        isNum1 = true;
        isNum2 = false;
        isOperator = false;
        console.log(`ans - ${ans.toString()}`);
        display.textContent = ans.toString();
        console.log(`num1 = ${num1}`);
        console.log(`num2 = ${num2}`);
        console.log(`operator = ${operator}`);
    }
});

const operatorList = document.querySelectorAll(".operator");
operatorList.forEach((operatorItem) => {
    operatorItem.addEventListener('click',() => {
        if(isNum1 === true && isNum2 === false && isOperator === false) {
            operator = operatorItem.textContent;
            display.textContent += operatorItem.textContent;
            isOperator = true;
            isNum2 = true;
            isNum1 = false;
        }
        else if(isNum1 === false && isNum2 === true && isOperator === true)
        {
            let clickEvent = new Event('click');
            equal.dispatchEvent(clickEvent);
            isNum1 = false;
            isNum2 = true;
            isOperator = true;
            operator = operatorItem.textContent;
            display.textContent += operatorItem.textContent;
        }
    });
});


const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
    isNum1=true;
    isNum2=false;
    isOperator = false;
});