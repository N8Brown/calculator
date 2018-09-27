const operators = document.querySelectorAll('.operators');
const numbers = document.querySelectorAll('.numbers');
const displaySmall = document.getElementById('equation');
const displayLarge = document.getElementById('result');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
let equation = [];


for (x=0; x<operators.length; x++){
    operators[x].addEventListener('click', getValue);
}

for (x=0; x<numbers.length; x++){
    numbers[x].addEventListener('click', getValue);
}

equal.addEventListener('click', getResult);
clear.addEventListener('click', reset);

function getValue(){
    equation.push(this.querySelector('p').innerText);
    displaySmall.innerText = equation.join("");
    switch (this.querySelector('p').innerText){
        case "+": displayLarge.innerText = "";
            break;
        case "-": displayLarge.innerText = "";
            break;
        case "*": displayLarge.innerText = "";
            break;
        case "/": displayLarge.innerText = "";
            break;
        default : displayLarge.innerText = this.querySelector('p').innerText;
            break;
    }
}

function getResult(){
    displaySmall.innerText = "";
    displayLarge.innerText = eval(equation.join(""));
    equation = [];
    equation.push(displayLarge.innerText);
}

function reset(){
    displaySmall.innerText = "";
    displayLarge.innerText = 0;
    equation = [];
}
