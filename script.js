let display = document.getElementById('display');
let historyList = document.getElementById('history');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value !== '' && !isNaN(display.value[display.value.length - 1])) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;
        addToHistory(expression + ' = ' + result);
    } catch (error) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    let listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}

function clearHistory() {
    historyList.innerHTML = '';
}

function square() {
    if (display.value !== '') {
        let result = Math.pow(parseFloat(display.value), 2);
        addToHistory(display.value + '² = ' + result);
        display.value = result;
    }
}

function squareRoot() {
    if (display.value !== '') {
        let result = Math.sqrt(parseFloat(display.value));
        addToHistory('√' + display.value + ' = ' + result);
        display.value = result;
    }
}

function logBase10() {
    if (display.value !== '') {
        let result = Math.log10(parseFloat(display.value));
        addToHistory('log(' + display.value + ') = ' + result);
        display.value = result;
    }
}

function sin() {
    if (display.value !== '') {
        let result = Math.sin(parseFloat(display.value) * (Math.PI / 180));
        addToHistory('sin(' + display.value + ') = ' + result);
        display.value = result;
    }
}

function cos() {
    if (display.value !== '') {
        let result = Math.cos(parseFloat(display.value) * (Math.PI / 180));
        addToHistory('cos(' + display.value + ') = ' + result);
        display.value = result;
    }
}

function tan() {
    if (display.value !== '') {
        let result = Math.tan(parseFloat(display.value) * (Math.PI / 180));
        addToHistory('tan(' + display.value + ') = ' + result);
        display.value = result;
    }
}

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});
