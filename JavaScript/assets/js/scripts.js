var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment (){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}

function decrenent (){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}