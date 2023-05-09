const CALCULATOR = document.querySelector('.calculator')
const OPERATORS = document.querySelectorAll('.calculator__operator')
const NUMBERS = document.querySelectorAll('.calculator__number')
const EQUALS = document.querySelector('.calculator__calculate')
const CLEAR_EQUATION = document.querySelector('.calculator__clear')
const COMMA = document.querySelector('.calculator__comma')
const EQUATION = document.querySelector('.calculator__result')

const regexNumCheck = /^[0-9]/

function CalculateResult(arr) {
    return eval(arr.join(''))
}

CALCULATOR.addEventListener('submit', function(e) {
    e.preventDefault()
})

// adds number to equation input
NUMBERS.forEach(function(number) {
    number.addEventListener('click', function(e) {
        EQUATION.value += e.target.textContent
    })
})

// adds opeartor to equation input
OPERATORS.forEach(function(operator) {
    operator.addEventListener('click', function(e) {
        if(regexNumCheck.test(EQUATION.value.split('')[EQUATION.value.length - 1])) {
            EQUATION.value += e.target.textContent
        }
    })
})

// adds a comma if the last character is a number
COMMA.addEventListener('click', function(e) {
    if(regexNumCheck.test(EQUATION.value.split('')[EQUATION.value.length - 1])) {
        EQUATION.value += '.'
    }
})

// clears user input from the input field
CLEAR_EQUATION.addEventListener('click', function(e) {
    EQUATION.value = ''
})

// initiates the calculation of the math equation
EQUALS.addEventListener('click', function(e) {
    const result = EQUATION.value.split('')

    if (result.length >= 3) {
        EQUATION.value = CalculateResult(result);
    }
})