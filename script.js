function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(n1,n2,operator){
    switch (operator){
        case "+":
            return add(n1,n2);
            break;
        case "-":
            return subtract(n1,n2);
            break;
        case "*":
            return multiply(n1,n2);
            break;
        case "/":
            return divide(n1,n2);
            break;
        default:
            return "ERROR";
    }
}

function populateDisplay(n){
    let display=document.querySelector(".display");
    display.textContent=n;
}


/*
console.log( add(5,2));
console.log( subtract(5,2));
console.log( multiply(5,2));
console.log( divide(5,2));
*/

let number1;
let number2;
let operator;
let displayvalue=0;

