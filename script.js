function multiply() {
    const firstNumber = firstInput.value;
    const secondNumber = secondInput.value;
    const product = firstNumber * secondNumber;
    console.log(product)
    answer.innerHTML = product;
}

function subtraction() {
    const firstNumber = firstInput.value;
    const secondNumber = secondInput.value;
    const subtract = firstNumber - secondNumber;
    console.log(subtract)
    answer.innerHTML = subtract;
}

function add() {
    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondInput.value);
    const sum = firstNumber + secondNumber;
    console.log(sum)
    answer.innerHTML = sum;
}

function quotient() {
    const firstNumber = firstInput.value;
    const secondNumber = secondInput.value;
    const division = firstNumber / secondNumber;
    console.log(division)
    answer.innerHTML = division;
};

function exponential() {
    const firstNumber = firstInput.value;
    const secondNumber = secondInput.value;
    const exponent = firstNumber ** secondNumber;
    console.log(exponent)
    answer.innerHTML = exponent;
};
function mod() {
    const firstNumber = firstInput.value;
    const secondNumber = secondInput.value;
    const modulo = firstNumber % secondNumber;
    console.log(modulo)
    answer.innerHTML = (modulo);
};