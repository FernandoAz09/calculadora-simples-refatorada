const numberButton = querySelectorAll('[data-number]')
const operationButton = querySelectorAll('[data-operator]')
const equalsButton = querySelector('[data-equals]')
const deleteButton = querySelector('[data-delete]')
const allClearButton = querySelector('[data-all-clear]')

const previousOperandTextElement = querySelector('[data-previous-operand]')
const currentOperandTextElement = querySelector('[data-current-operand]')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
}

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
)