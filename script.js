let calcData={
    n1: '',
    n2: '',
    operator: '',
    firstNumber: true,
    secondNumber: false,
    result: '',
    dotPressed: false,

};

let calcDataRef={
    n1: '',
    n2: '',
    operator: '',
    firstNumber: true,
    secondNumber: false,
    result: '',
    dotPressed: false,

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
    console.log(e);
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


function dotPress(e){
    console.log(e);
    if (!calcData.dotPressed){
        if(calcData.firstNumber){
            let j=calcData.n1;
            let k= e.target.textContent;
            let l= `${j}${k}`;
            console.log(l);
            populateDisplay(l);
            calcData.n1=l;
        }

        else if(calcData.secondNumber){
            let j=calcData.n2;
            let k= e.target.textContent;
            let l= `${j}${k}`;
            populateDisplay(l);
            calcData.n2=l;
        }


        calcData.dotPressed=true;
    }

}


function operatorPress(e){
    if (calcData.firstNumber){
        calcData.operator=e.target.textContent;
        calcData.firstNumber=false;
        calcData.secondNumber=true;
    }

    else if (calcData.n2=='' && calcData.operator != ''){
        calcData.operator=e.target.textContent;
    }

    if (calcData.result != '' && calcData.n1=='' && calcData.n2=='' ){
        calcData.n1=calcData.result;
        calcData.result='';
        calcData.firstNumber=false;
        calcData.secondNumber=true;
        calcData.operator=e.target.textContent;
    }

    if (calcData.n1 != '' && calcData.n2 != ''){
        let i=(operate(Number(calcData.n1),Number(calcData.n2),calcData.operator));
        populateDisplay(i);
        calcData.n1=i;
        calcData.n2='';
        calcData.operator=e.target.textContent;
        calcData.firstNumber=false;
        calcData.secondNumber=true;
    }

    calcData.dotPressed=false;
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


function clearState(){
    calcData=calcDataRef;
    populateDisplay(0);
}



//keyboard functions


function digitpressK(e){
    console.log(e);
    if (calcData.firstNumber){
        let a=calcData.n1;
        let b=Number(e);
        let x=`${a}${b}`;
        console.log(x);
        populateDisplay(x);
        calcData.n1=x;

    }

    if (calcData.secondNumber){
        let c=calcData.n2;
        let d=Number(e);
        let y=`${c}${d}`;
        console.log(y);
        populateDisplay(y);
        calcData.n2=y;

    }

}


function dotPressK(e){
    console.log(e);
    if (!calcData.dotPressed){
        if(calcData.firstNumber){
            let j=calcData.n1;
            let k= e;
            let l= `${j}${k}`;
            console.log(l);
            populateDisplay(l);
            calcData.n1=l;
        }

        else if(calcData.secondNumber){
            let j=calcData.n2;
            let k= e;
            let l= `${j}${k}`;
            populateDisplay(l);
            calcData.n2=l;
        }


        calcData.dotPressed=true;
    }

}


function operatorPressK(e){
    if (calcData.firstNumber){
        calcData.operator=e;
        calcData.firstNumber=false;
        calcData.secondNumber=true;
    }

    else if (calcData.n2=='' && calcData.operator != ''){
        calcData.operator=e;
    }

    if (calcData.result != '' && calcData.n1=='' && calcData.n2=='' ){
        calcData.n1=calcData.result;
        calcData.result='';
        calcData.firstNumber=false;
        calcData.secondNumber=true;
        calcData.operator=e;
    }

    if (calcData.n1 != '' && calcData.n2 != ''){
        let i=(operate(Number(calcData.n1),Number(calcData.n2),calcData.operator));
        populateDisplay(i);
        calcData.n1=i;
        calcData.n2='';
        calcData.operator=e;
        calcData.firstNumber=false;
        calcData.secondNumber=true;
    }

    calcData.dotPressed=false;
}


function calculateResultK(e){
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

//clear button
let clear = document.querySelector(".c");
clear.addEventListener("click",clearState);

//period selector
period=document.querySelector(".dot");

//period event listener
period.addEventListener("click",dotPress);


//keyboard support

document.addEventListener("keydown", keyPress);

function keyPress(e){
    console.log(e.key);
    let k=e.key;
    if (/^\d+$/.test(k)){
        console.log(k);
        digitpressK(k);
    }

    if (k==='.'){
        console.log(k);
        dotPressK(k);
    }

    if (k==="+" || k==='-'){
        console.log(k);
        operatorPressK(k);

    }

    if (k==='*'){
        operatorPressK("x");
    }

    if(k==='/'){
        operatorPressK('÷');
    }

    if(k==="Enter"){
        calculateResultK(k);
    }

    if(k==='Delete'){
        clearState();
    }


}




