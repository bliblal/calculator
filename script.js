let calcData={
    n1: '',
    n2: '',
    operator: '',
    firstNumber: true,
    secondNumber: false,
    result: '',

};


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
        case "x":
            return multiply(n1,n2);
            break;
        case "÷":
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

function digitpress(e){
    if (calcData.firstNumber){
        let a=calcData.n1;
        let b=Number(e.target.textContent);
        let x=`${a}${b}`;
        console.log(x);
        populateDisplay(x);
        calcData.n1=x;

    }

    if (calcData.secondNumber){
        let c=calcData.n2;
        let d=Number(e.target.textContent);
        let y=`${c}${d}`;
        console.log(y);
        populateDisplay(y);
        calcData.n2=y;

    }

}


function operatorPress(e){

    if (calcData.result){
        calcData.n1=calcData.result;
        calcData.operator=e.target.textContent;
        calcData.firstNumber=false;
        calcData.secondNumber=true;
        
    }


    if (calcData.secondNumber && !calcData.result){
        let result=operate(Number(calcData.n1),Number(calcData.n2),calcData.operator);
        console.log(result);
        populateDisplay(result);
        calcData.n1=result;
        calcData.n2='';
        calcData.operator=e.target.textContent;
        calcData.secondNumber=true;

    }

    if (calcData.firstNumber){
        calcData.operator=e.target.textContent;
        calcData.firstNumber=false;
        calcData.secondNumber=true;
    }
}

function calculateResult(e){
    if (calcData.firstNumber){
        let result=calcData.n1;
        populateDisplay(result);
        calcData.result=result;
    }

    if (calcData.secondNumber){
        let result;
        result=operate(Number(calcData.n1),Number(calcData.n2),calcData.operator);

        populateDisplay(result);
        calcData.result=result;
    }

    calcData.firstNumber=true;
    calcData.secondNumber=false;
    calcData.n1='';
    calcData.n2='';
}




/*
console.log( add(5,2));
console.log( subtract(5,2));
console.log( multiply(5,2));
console.log( divide(5,2));
*/


let displayvalue=0;

//Buttons selector
let digits=document.querySelectorAll(".num");

//event listeners 
digits.forEach(digit => digit.addEventListener("click", digitpress));

//operators
let op=document.querySelectorAll(".operators");
console.log(op);

//operator event listeners
op.forEach( operator => operator.addEventListener("click", operatorPress ));

//equal selector
let equal=document.querySelector(".equal");


//equal event listener
equal.addEventListener("click",calculateResult);
