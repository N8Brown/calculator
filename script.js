const buttons = document.querySelectorAll('.component');
const displaySmall = document.getElementById('equation');
const displayLarge = document.getElementById('result');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const operators = ["+","-","*","/"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
let equation = [];
let input = [];

for (x=0; x<buttons.length; x++){
    buttons[x].addEventListener('click', getValue);
}

equal.addEventListener('click', getResult);
clear.addEventListener('click', reset);


function checkFont(){
    if (displayLarge.innerText.length > 12){
        displayLarge.style.fontSize = '24px';
    }else{
        displayLarge.style.fontSize ='48px';
    }
}

function getValue(){
    let value = this.querySelector('p').innerText;

    if (operators.includes(value) && operators.includes(equation[equation.length-1])){
        equation.pop();
        equation.push(value);
    }

    else {
        equation.push(value);
    }
    
    input.push(value);
    displaySmall.innerText = equation.join("");    

    switch (value){
        case "+": displayLarge.innerText = "";
            input = [];
            break;
        case "-": displayLarge.innerText = "";
            input = [];
            break;
        case "*": displayLarge.innerText = "";
            input = [];
            break;
        case "/": displayLarge.innerText = "";
            input = [];
            break;
        default : displayLarge.innerText = input.join("");
            break;
    }

    checkFont();
}

function getResult(){
    let result = eval(equation.join(""));
    displaySmall.innerText = "";
    displayLarge.innerText = result;
    input = [];
    equation = [];
    equation.push(displayLarge.innerText);
    checkFont();
}

function reset(){
    displaySmall.innerText = "";
    displayLarge.innerText = 0;
    input = [];
    equation = [];
    checkFont();
}
