let items = document.querySelectorAll('#item');
let firstNumInput = document.getElementById('first-num');
let operatorInput = document.getElementById('operator');
let secondNumInput = document.getElementById('second-num');
let resultInput = document.getElementById('result');

//Adds click event listener to items
items.forEach(item => {
    item.addEventListener('click', function(event) {
        let value = event.target.value;
        //clears all values for each variable
        if(value === 'C') {
            firstNumInput.value = '';
            operatorInput.value = '';
            secondNumInput.value = '';
            resultInput.value = '';
        // assigns values to each variable based on value assigned in HTML.
         } else if(value === '='){
            let firstNum = parseFloat(firstNumInput.value);
            let operator = operatorInput.value;
            let secondNum = parseFloat(secondNumInput.value);
            let result;
            // Switch case that handles the math.
            switch (operator) {
                case '+':
                    result = firstNum + secondNum;
                    break;
                case '-': 
                    result = firstNum - secondNum;
                    break;
                case '*':
                    result = firstNum * secondNum;
                    break;
                case '/':
                    result = firstNum / secondNum;
                    break;
                default:
                    result = 'Error!';
            }

            resultInput.value = result;
         } else if (['+', '-', '*', '/'].includes(value)) {
            operatorInput.value = value;
         } else {
            if (operatorInput.value === '') {
                firstNumInput.value += value;
            } else {
                secondNumInput.value += value;
            }
         }
    });
});