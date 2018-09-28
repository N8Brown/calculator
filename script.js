const operators = document.querySelectorAll('.operators');
const numbers = document.querySelectorAll('.numbers');
const displaySmall = document.getElementById('equation');
const displayLarge = document.getElementById('result');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
let equation = [];
let input = [];

for (x=0; x<operators.length; x++){
    operators[x].addEventListener('click', getValue);
}

for (x=0; x<numbers.length; x++){
    numbers[x].addEventListener('click', getValue);
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
    let button = this.querySelector('p').innerText;
    equation.push(button);
    input.push(button);
    displaySmall.innerText = equation.join("");
    switch (button){
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
    displaySmall.innerText = "";
    displayLarge.innerText = eval(equation.join(""));
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
