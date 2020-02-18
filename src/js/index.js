const addition = document.getElementById('btn-add');
const subtraction = document.getElementById('btn-sub')
const multiply = document.getElementById('btn-multiply')
const divide = document.getElementById('btn-divide')
const clear = document.getElementById('btn-clear')
const input = document.getElementById('input');
const output = document.getElementById('output');
const equals = document.getElementById('btn-equals');

const digit = document.querySelectorAll('.calc__btn--digit');

const memoryStore = document.getElementById('btn-memStore')
const memoryClear = document.getElementById('btn-memClear');
const memorySubtract = document.getElementById('btn-memSub');
const memoryAddition = document.getElementById('btn-memAdd');

let lastOperation;
let total = [];
let value = 0;
let clickedFunc = 1;
let biggerNumber = '';
let memory = null;
let op = '';

// some functions bro ***************************
//MEMORY **************
memoryStore.addEventListener('click', () => {
  memory = Number(input.value);
})

memoryClear.addEventListener('click', () => {
  memory = 0;
})

memorySubtract.addEventListener('click', () => {
  memory -= Number(input.value);
})

memoryAddition.addEventListener('click', () => {
  memory += Number(input.value);
})


//addition
const addFunc = () => {
    input.focus();
    op = '+';
    output.textContent = Number(output.textContent) + value;
    input.value += op;
    value = 0;
}
addition.addEventListener('click', () => {
  addFunc();
  lastOperation = addFunc;
});


//subtraction 
const subFunc = () => {
    input.focus();
    op = '-';
    output.textContent = Number(output.textContent) - value;
    input.value += op;
    value = 0;
}
subtraction.addEventListener('click', () => {
  subFunc();
  lastOperation = subFunc;
});


//multiply
const multiplyFunc = () => {
    output.textContent = Number(output.textContent) * value;
    value = 0;
    op = '*'
    input.value += op;
    input.focus();
}
multiply.addEventListener('click', () => {
  multiplyFunc();
  lastOperation = multiplyFunc;
});


//divide
const divideFunc = () => {
    output.textContent = Number(output.textContent) / value;
    op = '/'
    value = 0;
    input.value += op;
    input.focus();
}
divide.addEventListener('click', () => {
  divideFunc();
  lastOperation = divideFunc;
});


//clearing stuff
clear.addEventListener('click', () => {
    input.value = '';
    input.focus();
    output.textContent = 0;
});


//equals
equals.addEventListener('click', () => {
 lastOperation();
 console.log(typeof(lastOperation));
});


//show digits bro
for(let i = 0; i < digit.length; i++) {
  digit[i].addEventListener('click', function() {
      input.value = input.value + digit[i].textContent;
      value = Number(value + digit[i].textContent);
  })
}






